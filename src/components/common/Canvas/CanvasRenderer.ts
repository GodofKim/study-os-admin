import {
  MAX_LANDSCAPE_WIDTH_RATIO,
  MAX_PORTRAIT_WIDTH_RATIO,
  type Paper,
} from "@/components/common/Canvas/interfaces/Paper";
import { type Point } from "@/components/common/Canvas/interfaces/Point";
import ActionManager from "@/components/common/Canvas/managers/ActionManager";
import BackgroundManager, {
  type Background,
} from "@/components/common/Canvas/managers/BackgroundManager";
import { Manager } from "@/components/common/Canvas/managers/Manager";
import PaintManager from "@/components/common/Canvas/managers/PaintManager";

const MIN_ZOOM_SCALE = 0.5;
const MAX_ZOOM_SCALE = 3;

const PINCH_MOVE_THRESHOLD_PIXEL = 50;

class CanvasRenderer {
  private managers: Manager[] = [];
  private actionManager: ActionManager;
  private paintManager: PaintManager;
  private backgroundManager: BackgroundManager;

  private containerElement?: HTMLElement;
  private paper?: Paper;
  /**
   * current Canvas Context scale
   * note that initial canvas scale is set to {@link window.devicePixelRatio}
   */
  private currentScale = window.devicePixelRatio;
  /**
   * current Canvas Context origin (top left)
   * for example, if tranaslate.x is 10, canvas context is started from 10px left
   */
  private currentTranslate: Point = { x: 0, y: 0 };
  /**
   * initial paper scale with respect to container width / VIRTUAL PAPER WIDTH
   * this value is used to determine MAX_ZOOM_SCALE & MIN_ZOOM_SCALE value when zooming
   */
  private initialPaperScale = 1;

  constructor({
    actionManager,
    paintManager,
    backgroundManager,
  }: {
    actionManager: ActionManager;
    paintManager: PaintManager;
    backgroundManager: BackgroundManager;
  }) {
    this.actionManager = actionManager;
    this.paintManager = paintManager;
    this.backgroundManager = backgroundManager;

    /**
     * The order of managers should be guaranteed as below.
     * Because we need to draw background first, then paint, then action.
     * Action Canvas Should be on the top of the stack.
     *
     *  1. Background Manager
     *  2. Paint Manager
     *  3. Action Manager (Forefront)
     */
    this.managers = [
      this.backgroundManager,
      this.paintManager,
      this.actionManager,
    ];
  }

  private optimizeCanvas(
    canvas: HTMLCanvasElement,
    containerElement: HTMLElement
  ) {
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";

    /**
     * Disable default touchAction
     * - for custom pinch zoom & disable unnecessary scroll
     */
    canvas.style.touchAction = "none";
    (
      canvas.style as CSSStyleDeclaration & {
        // for safari mobile. we use any because this is not a standard property
        // https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-touch-callout
        webkitTouchCallout: "none" | "default";
      }
    ).webkitTouchCallout = "none";

    const { width, height } = containerElement.getBoundingClientRect();

    if (!this.paper) {
      throw new Error("Paper is not specified");
    }

    // adjust canvas size to represent all paper pixels
    const canvasWidth = Math.max(width, this.paper.width);
    const canvasHeight = Math.max(height, this.paper.height);

    canvas.width = canvasWidth * window.devicePixelRatio;
    canvas.height = canvasHeight * window.devicePixelRatio;
    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;

    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Canvas Context is not available");
    }

    context.scale(window.devicePixelRatio, window.devicePixelRatio);

    /**
     * This is the default canvas scale & translate.
     * After this, we have to transform canvas context according to proper paper policy.
     * usint {@link transform} function.
     */
    this.setScale(window.devicePixelRatio);
    this.setTranslate({ x: 0, y: 0 });
  }

  private setInitialPaperScale(initialPaperScale: number) {
    this.initialPaperScale = initialPaperScale;
  }

  private getPaperClip({
    x,
    y,
    scale,
  }: { x?: number; y?: number; scale?: number } = {}) {
    const paperClip = new Path2D();

    if (!this.paper) return paperClip;

    if (!this.containerElement) return paperClip;

    const paperTranslateX = x ?? 0;
    const paperTranslateY = y ?? 0;
    const paperWidth = this.paper.width * (scale ?? 1);
    const paperHeight = this.paper.height * (scale ?? 1);

    paperClip.moveTo(paperTranslateX, paperTranslateY);
    paperClip.lineTo(paperTranslateX + paperWidth, paperTranslateY);
    paperClip.lineTo(
      paperTranslateX + paperWidth,
      paperTranslateY + paperHeight
    );
    paperClip.lineTo(paperTranslateX, paperTranslateY + paperHeight);
    paperClip.lineTo(paperTranslateX, paperTranslateY);

    return paperClip;
  }

  /**
   * this is the actual scale factor of canvas context.
   * which can be received by {@link CanvasRenderingContext2D.getTransform}
   */
  get scale() {
    return this.currentScale;
  }

  /**
   * scale factor multiplied or divided by zoom factor.
   * since canvas context scale matrix is initially multiplied by {@link window.devicePixelRatio},
   * we need to divide it by {@link window.devicePixelRatio} to get actual scale factor scaled by zoom
   */
  get zoomedScale() {
    return this.currentScale / window.devicePixelRatio;
  }

  get translate() {
    return this.currentTranslate;
  }

  private setScale(scale: number) {
    this.currentScale = scale;
  }

  private setTranslate(point: Point) {
    this.currentTranslate = point;
  }

  /**
   * Screenshot with current background
   * 1. Set Background
   * 2. Set OffscreenCanvas(mergedCanvas) with the size of the paper
   * 3. push stack of manager's canvas context to default render
   *    - initialScale / initialTranslate
   * 4. drawImage with manager's canvas to mergedCanvas
   * 5. return mergedCanvas as Blob
   *
   * @param background Background
   * @returns Promise<Blob | null>
   */
  public async screenshot(background: Background): Promise<Blob | null> {
    this.backgroundManager.setBackground(background);

    let mergedCanvas: HTMLCanvasElement | null =
      document.createElement("canvas");
    const mergedCanvasContext = mergedCanvas.getContext("2d");
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;

    if (!this.paper || !this.containerElement) return null;

    const { height } = this.containerElement.getBoundingClientRect();
    const canvasHeight = Math.max(height, this.paper.height);

    mergedCanvas.width = this.paper.width;
    mergedCanvas.height = this.paper.height;

    /**
     * if landscape, we need to render paper with landscape ratio (max 75% of the screen)
     * if portrait, we need to render paper with portrait ratio (100% of the screen)
     * renderedClientWidth is the actual width of the paper with respect to the screen
     */
    const renderedClientWidth =
      this.containerElement.clientWidth *
      (isLandscape ? MAX_LANDSCAPE_WIDTH_RATIO : MAX_PORTRAIT_WIDTH_RATIO);

    const initialPaperScale = renderedClientWidth / this.paper.width;
    const initialPaperTranslate = {
      x: (this.containerElement.clientWidth - this.paper.width) / 2,
      y: this.paper.marginTop ?? this.paper.margin ?? 0,
    };

    /**
     * Height Scale Factor
     * - Since most cases, we have larger paper height than canvas screen height,
     * - so, when we screenshot the whole paper, we need to scale the height of the canvas
     */
    const HEIGHT_SCALE_FACTOR = 2.5;
    // adjust canvas size using scale factor
    [this.backgroundManager, this.paintManager].forEach((manager) => {
      manager.canvas.height =
        canvasHeight * window.devicePixelRatio * HEIGHT_SCALE_FACTOR;
      manager.canvas.style.height = `${canvasHeight * HEIGHT_SCALE_FACTOR}px`;
    });

    // reset canvas scale & translate variable
    this.setInitialPaperScale(initialPaperScale);
    this.setScale(devicePixelRatio);
    this.setTranslate({ x: 0, y: 0 });
    this.transform(initialPaperScale, initialPaperTranslate);

    [this.backgroundManager, this.paintManager].forEach((manager) => {
      if (!mergedCanvasContext || !this.containerElement || !this.paper) return;

      //
      // calculate source options
      //
      // sx is the left position of the source image (manager)
      const sx = isLandscape
        ? (manager.canvas.width - renderedClientWidth * devicePixelRatio) / 2
        : 0;
      const sy = 0;
      const sw = this.paper.width * devicePixelRatio * initialPaperScale;
      const sh = this.paper.height * devicePixelRatio * initialPaperScale;

      // in order to screenshot with proper scale,
      // we need to reset canvas context to default scale & translate
      manager.context.save();
      manager.context.resetTransform();
      manager.context.scale(devicePixelRatio, devicePixelRatio);

      mergedCanvasContext.drawImage(
        manager.canvas,
        // source
        sx,
        sy,
        sw,
        sh,
        // destination
        0,
        0,
        this.paper.width,
        this.paper.height
      );
      manager.context.restore();
    });

    // after screenshot, we need to reset canvas size to original size
    [this.backgroundManager, this.paintManager].forEach((manager) => {
      manager.canvas.height = canvasHeight * window.devicePixelRatio;
      manager.canvas.style.height = `${canvasHeight}px`;
    });

    // reset canvas scale & translate variable
    this.setInitialPaperScale(initialPaperScale);
    this.setScale(devicePixelRatio);
    this.setTranslate({ x: 0, y: 0 });
    this.transform(initialPaperScale, initialPaperTranslate);

    return new Promise((resolve) => {
      if (!mergedCanvas) throw new Error("Merged Canvas is not available");
      mergedCanvas.toBlob(resolve);
      mergedCanvas = null;
    });
  }

  public render({ target, paper }: RenderParameters) {
    const targetElement = target;

    if (!targetElement) {
      throw new Error("Target element is required");
    }

    if (!paper) {
      throw new Error("Paper is required");
    }

    this.containerElement = targetElement;
    /**
     * Set overflow hidden to prevent autoscaling in ios safari.
     * if containerElement's overflow is not hidden, ios safari automatically scales canvas
     * when resize from landscape to portrait. since allocated canvas size is reduced whan resized
     */
    this.containerElement.style.overflow = "hidden";

    // set paper & transform canvas context
    this.paper = paper;

    // When Canvas Resizes by rotation, we need to clean up canvas & re-render it.
    targetElement
      .querySelectorAll("canvas")
      .forEach((canvas) => targetElement.removeChild(canvas));

    // optimize canvas & render it by calling transform
    this.managers.forEach((manager) => {
      this.optimizeCanvas(manager.canvas, targetElement);
      targetElement.appendChild(manager.canvas);
    });

    const isLandscape = window.matchMedia("(orientation: landscape)").matches;
    const renderedClientWidth =
      this.containerElement.clientWidth *
      (isLandscape ? MAX_LANDSCAPE_WIDTH_RATIO : MAX_PORTRAIT_WIDTH_RATIO);

    const initialPaperScale = renderedClientWidth / this.paper.width;
    const initialClipTranslate = {
      x: (this.containerElement.clientWidth - paper.width) / 2,
      y: paper.marginTop ?? paper.margin ?? 0,
    };

    this.setInitialPaperScale(initialPaperScale);
    this.transform(initialPaperScale, initialClipTranslate);

    document.removeEventListener(
      "visibilitychange",
      this.handleBackgroundTransition
    );
    document.addEventListener(
      "visibilitychange",
      this.handleBackgroundTransition
    );
  }

  /**
   * When user switches tab, or goes to background,
   * browser deallocates canvas drawing pixels.
   * so we need to redraw canvas when user comes back to foreground.
   */
  private handleBackgroundTransition = () => {
    if (document.visibilityState === "visible") {
      this.managers.forEach((manager) => {
        manager.canvas.style.display = "block";
        manager.redraw();
      });
    }
  };

  /**
   * canvas context scale & translate is accumulated.
   * so each time context scales or translates, global scale & translate should be updated.
   * {@link setScale} for {@link currentScale},
   * {@link setTranslate} for {@link currentTranslate} is used for this purpose.
   *
   * note that initial canvas scale is set to {@link window.devicePixelRatio}
   * which handled by {@link optimizeCanvas} function for canvas matrix
   */
  private transform(scale: number, origin: Point) {
    this.managers.forEach((manager) => {
      manager.context.scale(scale, scale);
      manager.context.translate(origin.x / scale, origin.y / scale);
    });

    // update scale & translate to track context's transform matrix.
    this.setScale(scale * this.scale);
    this.setTranslate({
      x: (origin.x + this.translate.x) / scale,
      y: (origin.y + this.translate.y) / scale,
    });

    // Boundary Condition Handling
    const { x, y } = this.handleBoundaryConditionOnEnd();

    // if boundary condition applied, we have to reset transform & apply new boundary condition logic
    // since new clip left / top translate is specified, this value must be applied with initial scale
    // so we have to handle the translation following.
    if (x !== this.translate.x || y !== this.translate.y) {
      this.managers.forEach((manager) => {
        manager.context.resetTransform();
        manager.context.scale(this.scale, this.scale);
        manager.context.translate(x, y);
      });
      this.setTranslate({ x, y });
    }

    // redraw with clipped context
    this.managers.forEach((manager) => {
      /**
       * Save Canvas Context Before Clip
       * - Clipped Context is only recoverable by restoring context
       * - We need to save context before clip to recover it
       * - this saved context must be restored when new pointerdown event
       */
      manager.context.save();
      manager.clear();

      if (this.paper) manager.context.clip(this.getPaperClip());
      manager.redraw();
    });
  }

  private handleBoundaryConditionOnEnd(): Point {
    if (!this.paper) {
      throw new Error("Paper is not specified");
    }

    if (!this.containerElement) {
      throw new Error("Container Element is not specified");
    }

    const canvasWidth = this.paper.width * this.zoomedScale;
    const containerWidth = this.containerElement.clientWidth;
    const canvasHeight = this.paper.height * this.zoomedScale;
    const containerHeight = this.containerElement.clientHeight ?? 0;

    // Width Condition
    let { x, y } = this.translate;

    if (canvasWidth <= containerWidth) {
      x = (containerWidth - canvasWidth) / 2;
      x = x / this.zoomedScale;
    } else if (
      this.translate.x * this.zoomedScale + canvasWidth <
      containerWidth
    ) {
      x = (containerWidth - canvasWidth) / this.zoomedScale;
    } else if (this.translate.x > 0) {
      x = 0;
    }

    // Height Condition
    if (canvasHeight <= containerHeight) {
      y = (containerHeight - canvasHeight) / 2;
      y = y / this.zoomedScale;
    } else if (this.translate.y > 0) {
      y = 0;
    } else if (
      this.translate.y * this.zoomedScale + canvasHeight <
      containerHeight
    ) {
      y = (containerHeight - canvasHeight) / this.zoomedScale;
    }

    return { x, y };
  }

  // MOVE: Prevent Diagonal Movement
  private handleBoundaryConditionOnMove(translate: Point): Point {
    if (!this.paper) {
      throw new Error("Paper is not specified");
    }

    const canvasWidth = this.paper.width * this.zoomedScale;
    const containerWidth = this.containerElement?.clientWidth ?? 0;
    const canvasHeight = this.paper.height * this.zoomedScale;
    const containerHeight = this.containerElement?.clientHeight ?? 0;

    // Width Condition
    let { x, y } = translate;

    const currentX = this.translate.x + translate.x;
    const currentY = this.translate.y + translate.y;

    if (canvasWidth <= containerWidth) {
      x = this.trackedTranslate.x;
    } else if (currentX * this.zoomedScale + canvasWidth < containerWidth) {
      x = this.trackedTranslate.x;
    } else if (currentX > PINCH_MOVE_THRESHOLD_PIXEL) {
      x = this.trackedTranslate.x;
    }

    // Height Condition
    if (canvasHeight <= containerHeight) {
      y = this.trackedTranslate.y;
    } else if (currentY * this.zoomedScale + canvasHeight < containerHeight) {
      y = this.trackedTranslate.y;
    } else if (currentY > PINCH_MOVE_THRESHOLD_PIXEL) {
      y = this.trackedTranslate.y;
    }

    return { x, y };
  }

  /**
   * transform original clientX & clientY to transformed clientX & clientY
   * by considering current scale & translate
   */
  public transformPointerEvent(event: PointerEvent): PointerEvent {
    // shouldn't happen
    if (!this.containerElement) return event;

    const rect = this.containerElement.getBoundingClientRect();

    return {
      ...event,
      pointerId: event.pointerId,
      pointerType: event.pointerType,
      clientX:
        (event.clientX - rect.left) / this.zoomedScale - this.translate.x,
      clientY: (event.clientY - rect.top) / this.zoomedScale - this.translate.y,
    };
  }

  public isPointerInClippedArea(transformedEvent: PointerEvent): boolean {
    if (transformedEvent.pointerType === "mouse") return false;

    // if paper is not specified, all pen events are valid
    if (!this.paper) return true;

    // if pointerType is pen, we need to check whether it is inside clip path
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    return context.isPointInPath(
      this.getPaperClip(),
      transformedEvent.clientX,
      transformedEvent.clientY
    );
  }

  private singlePointerStart = false;
  private doublePointerStart = false;
  private trackedScale = 1;
  private trackedTranslate: Point = { x: 0, y: 0 };
  private trackedStartPoint: Point = { x: 0, y: 0 };
  private trackedLastDistance = 0;
  private eventCache: PointerEvent[] = [];

  public handlePinchZoomOnStart(event: PointerEvent) {
    // we only use eventCache for touch event (for pinch-zoom)
    this.eventCache.push(event);

    // we do not handle more than 3 fingers so ignore it.
    if (this.eventCache.length > 2) {
      this.eventCache.pop();
    } else if (this.eventCache.length === 2) {
      if (!this.eventCache[0] || !this.eventCache[1]) return;

      const event1 = this.eventCache[0];
      const event2 = this.eventCache[1];

      // initialize tracke value for zoom
      this.doublePointerStart = false;
      this.trackedLastDistance = Math.sqrt(
        (event1.clientX - event2.clientX) ** 2 +
          (event1.clientY - event2.clientY) ** 2
      );
      this.trackedScale = 1;
      this.trackedTranslate = { x: 0, y: 0 };
      this.trackedStartPoint = {
        x: (event1.clientX + event2.clientX) / 2,
        y: (event1.clientY + event2.clientY) / 2,
      };

      /**
       * Before Zooming, we need to clear clipped area by restoring context
       * saved in {@link transform} function.
       */
      this.managers.forEach((manager) => manager.context.restore());
    } else if (this.eventCache.length === 1) {
      this.trackedTranslate = { x: 0, y: 0 };
      this.singlePointerStart = false;
      this.trackedStartPoint = {
        x: event.clientX,
        y: event.clientY,
      };

      /**
       * Before Moving, we need to clear clipped area by restoring context
       * saved in {@link transform} function.
       */
      this.managers.forEach((manager) => manager.context.restore());
    }
  }

  public handlePinchZoomOnMove(event: PointerEvent) {
    // we only handle event in current event cache
    if (!this.eventCache.find((e) => e.pointerId === event.pointerId)) return;

    if (this.eventCache.length === 2) {
      event.stopPropagation();
      // update event's position in event cache
      // since event cache is readonly, we need to update it by filter & push
      this.eventCache = this.eventCache
        .filter((e) => e.pointerId !== event.pointerId)
        .concat(event);

      // calculate zoom factor in current event
      if (!this.eventCache[0] || !this.eventCache[1]) return;

      const event1 = this.eventCache[0];
      const event2 = this.eventCache[1];

      const currentDistance = Math.sqrt(
        (event1.clientX - event2.clientX) ** 2 +
          (event1.clientY - event2.clientY) ** 2
      );
      let curZoomFactor = currentDistance / this.trackedLastDistance;

      const expectedCanvasScale =
        this.zoomedScale * this.trackedScale * curZoomFactor;

      if (curZoomFactor > 0.995 && curZoomFactor < 1.005) {
        // Smoothing for performance
        curZoomFactor = 1;
      } else if (
        expectedCanvasScale < MIN_ZOOM_SCALE * this.initialPaperScale ||
        expectedCanvasScale > MAX_ZOOM_SCALE * this.initialPaperScale
      ) {
        // min max zoom handling
        curZoomFactor = 1;
      }

      this.trackedScale *= curZoomFactor;
      this.trackedLastDistance = currentDistance;

      const curMiddlePoint: Point = {
        x: (event1.clientX + event2.clientX) / 2,
        y: (event1.clientY + event2.clientY) / 2,
      };

      // distance between current middle point & initial middle point (when pointer down)
      const derivative: Point = {
        x: (curMiddlePoint.x - this.trackedStartPoint.x) / this.zoomedScale,
        y: (curMiddlePoint.y - this.trackedStartPoint.y) / this.zoomedScale,
      };

      // update origin by considering canvas scale & translate
      if (!this.containerElement) return;
      const rect = this.containerElement.getBoundingClientRect();
      const curZoomOrigin: Point = {
        x:
          (this.trackedStartPoint.x - rect.left) / this.zoomedScale -
          this.translate.x,
        y:
          (this.trackedStartPoint.y - rect.top) / this.zoomedScale -
          this.translate.y,
      };

      if (!this.doublePointerStart) {
        // initial movement
        // after 2 fingers are on screen, we start to track zoom
        // by draw pixels on action canvas
        this.doublePointerStart = true;

        const paperClip = this.getPaperClip();
        this.actionManager.clear();
        this.actionManager.context.save();

        if (this.paper) this.actionManager.context.clip(paperClip);

        [this.backgroundManager, this.paintManager].forEach((manager) => {
          manager.canvas.style.display = "none";
          manager.context.save();
          manager.context.resetTransform();
          manager.context.scale(devicePixelRatio, devicePixelRatio);
          manager.redraw();
          this.actionManager.context.drawImage(
            manager.canvas,
            0,
            0,
            manager.canvas.width / devicePixelRatio,
            manager.canvas.height / devicePixelRatio
          );
          manager.context.restore();
        });
        this.actionManager.context.restore();
      } else {
        // update zoom scale & origin
        this.trackedTranslate.x = (1 - this.trackedScale) * curZoomOrigin.x;
        this.trackedTranslate.y = (1 - this.trackedScale) * curZoomOrigin.y;

        const paperClip = this.getPaperClip({
          x: this.trackedTranslate.x + derivative.x,
          y: this.trackedTranslate.y + derivative.y,
          scale: this.trackedScale,
        });
        this.actionManager.clear();
        this.actionManager.context.save();

        if (this.paper) this.actionManager.context.clip(paperClip);

        [this.backgroundManager, this.paintManager].forEach((manager) => {
          manager.context.save();
          manager.context.resetTransform();
          manager.context.scale(devicePixelRatio, devicePixelRatio);
          this.actionManager.context.drawImage(
            manager.canvas,
            this.trackedTranslate.x + derivative.x,
            this.trackedTranslate.y + derivative.y,
            (manager.canvas.width * this.trackedScale) / devicePixelRatio,
            (manager.canvas.height * this.trackedScale) / devicePixelRatio
          );
          manager.context.restore();
        });
        this.actionManager.context.restore();
      }
    } else if (this.eventCache.length === 1) {
      // if zooming is in progress, we do not handle single pointer event
      if (this.doublePointerStart) return;
      // update event's position in event cache
      // since event cache is readonly, we need to update it by filter & push
      this.eventCache = this.eventCache
        .filter((e) => e.pointerId !== event.pointerId)
        .concat(event);

      if (!this.singlePointerStart) {
        this.singlePointerStart = true;
        const paperClip = this.getPaperClip({
          x: this.trackedTranslate.x,
          y: this.trackedTranslate.y,
        });
        this.actionManager.clear();
        this.actionManager.context.save();

        if (this.paper) this.actionManager.context.clip(paperClip);

        [this.backgroundManager, this.paintManager].forEach((manager) => {
          manager.canvas.style.display = "none";
          manager.context.save();
          manager.context.resetTransform();
          manager.context.scale(devicePixelRatio, devicePixelRatio);
          manager.redraw();
          this.actionManager.context.drawImage(
            manager.canvas,
            0,
            0,
            manager.canvas.width / devicePixelRatio,
            manager.canvas.height / devicePixelRatio
          );
          manager.context.restore();
        });

        this.actionManager.context.restore();
      } else {
        // update origin by considering canvas scale & translate
        const { x, y } = this.handleBoundaryConditionOnMove({
          x: (event.clientX - this.trackedStartPoint.x) / this.zoomedScale,
          y: (event.clientY - this.trackedStartPoint.y) / this.zoomedScale,
        });

        this.trackedTranslate.x = x;
        this.trackedTranslate.y = y;

        const paperClip = this.getPaperClip({
          x: this.trackedTranslate.x,
          y: this.trackedTranslate.y,
        });
        this.actionManager.clear();
        this.actionManager.context.save();

        if (this.paper) this.actionManager.context.clip(paperClip);

        [this.backgroundManager, this.paintManager].forEach((manager) => {
          manager.context.save();
          manager.context.resetTransform();
          manager.context.scale(devicePixelRatio, devicePixelRatio);
          this.actionManager.context.drawImage(
            manager.canvas,
            this.trackedTranslate.x,
            this.trackedTranslate.y,
            manager.canvas.width / devicePixelRatio,
            manager.canvas.height / devicePixelRatio
          );
          manager.context.restore();
        });

        this.actionManager.context.restore();
      }
    }
  }

  public handlePinchZoomOnEnd(event: PointerEvent) {
    if (!this.eventCache.find((e) => e.pointerId === event.pointerId)) {
      console.debug("Event Cache is not found");
    }

    if (this.eventCache.length === 2) {
      if (!this.eventCache[0] || !this.eventCache[1]) return;

      const event1 = this.eventCache[0];
      const event2 = this.eventCache[1];

      const curMiddlePoint: Point = {
        x: (event1.clientX + event2.clientX) / 2,
        y: (event1.clientY + event2.clientY) / 2,
      };
      const derivative: Point = {
        x: (curMiddlePoint.x - this.trackedStartPoint.x) / this.zoomedScale,
        y: (curMiddlePoint.y - this.trackedStartPoint.y) / this.zoomedScale,
      };
      this.trackedTranslate.x += derivative.x;
      this.trackedTranslate.y += derivative.y;
      this.transform(this.trackedScale, this.trackedTranslate);

      // clear action canvas & show background & paint canvas
      this.actionManager.clear();
      [this.backgroundManager, this.paintManager].forEach((manager) => {
        manager.canvas.style.display = "block";
      });

      // initialize values
      this.doublePointerStart = false;
      this.trackedScale = 1;
      this.trackedTranslate = { x: 0, y: 0 };
      this.trackedStartPoint = { x: 0, y: 0 };
      this.trackedLastDistance = 0;
    } else if (this.eventCache.length === 1) {
      this.transform(this.trackedScale, this.trackedTranslate);
      // clear action canvas & show background & paint canvas
      this.actionManager.clear();
      [this.backgroundManager, this.paintManager].forEach((manager) => {
        manager.canvas.style.display = "block";
      });
      // initialize values
      this.singlePointerStart = false;
      this.trackedTranslate = { x: 0, y: 0 };
    }
    this.eventCache = [];
  }
}

export default CanvasRenderer;

export interface RenderParameters {
  target: HTMLElement;
  paper: Paper;
}
