import Action, {
  type ActionParameters,
} from '@/components/common/Canvas/actions/Action';
import DeleteCommand from '@/components/common/Canvas/commands/DeleteCommand';
import FindIntersectionCommand from '@/components/common/Canvas/commands/FindIntersectionCommand';
import TransformCommand from '@/components/common/Canvas/commands/TransformCommand';
import { type Point } from '@/components/common/Canvas/interfaces/Point';
import PathShape from '@/components/common/Canvas/shapes/PathShape';
import RectangleShape from '@/components/common/Canvas/shapes/RectangleShape';
import Shape from '@/components/common/Canvas/shapes/Shape';

// TODO: make it configurable
const LASSO_BOUNDING_BOX_PADDING = 10;

interface LassoProperties {}

class LassoAction extends Action<LassoProperties> {
  static actionName = 'LassoAction';

  protected actionContext: CanvasRenderingContext2D;

  private isSelected = false;
  private isDrawing = false;
  private isInsideLasso = false;

  private currentIntersectedShapes: Shape[] = [];
  private currentLassoShape: Shape | null = null;
  private currentLassoPoints: Point[] = [];
  private currentLassoStyles = {
    color: 'gray',
    width: 2,
  } as const;

  private lastPoint: Point | null = null;
  private derivative: Point = { x: 0, y: 0 };

  constructor({ actionContext }: ActionParameters) {
    const defaultProperties: LassoProperties = {};
    super(defaultProperties);

    this.actionContext = actionContext;
  }

  public onActionStart(event: PointerEvent) {
    this.isDrawing = true;
    this.isInsideLasso = true;
    const currentPoint = { x: event.clientX, y: event.clientY };

    /**
     * Select Phase
     * 1. start drawing lasso shape (path shape) in action canvas context
     * 2. collect points of lasso shape in order to generate PathShape
     */
    if (!this.isSelected) {
      this.actionContext.save();
      this.actionContext.strokeStyle = this.currentLassoStyles.color;
      this.actionContext.lineWidth = this.currentLassoStyles.width;
      this.actionContext.setLineDash([5, 5]);

      this.currentLassoPoints = [];
      this.currentLassoPoints.push(currentPoint);

      this.actionContext.beginPath();
      this.actionContext.moveTo(currentPoint.x, currentPoint.y);

      return undefined;
    }

    /**
     * Transform Phase
     * 1. when isSelected is true, there should be a lasso shape and selected shapes
     * 2. decide whether the pointer is inside the lasso shape
     *
     * - if true
     *    1. remove selected shapes from the main canvas
     *    2. draw selected shapes in the action canvas
     *
     * - if false
     *    1. clear selected shapes array
     *    2. remove lasso shapes and clear all setups
     */
    if (!this.currentLassoShape) return undefined;

    // lasso action start
    const lassoShape = this.currentLassoShape.translate(this.derivative);

    if (lassoShape.isPointInShape(currentPoint)) {
      const removeCommand = new DeleteCommand({
        ids: this.currentIntersectedShapes.map((shape) => shape.id),
        stackable: false,
      });

      // save context before translate the action canvas
      // to accmumulate action canvas translation
      this.actionContext.save();
      this.actionContext.translate(this.derivative.x, this.derivative.y);

      this.currentLassoShape.draw(this.actionContext);
      this.currentIntersectedShapes.forEach((shape) =>
        shape.draw(this.actionContext),
      );

      this.lastPoint = currentPoint;

      return removeCommand;
    }

    // pointer is not inside lasso shape. so clear all setups
    this.cleanup();

    return undefined;
  }

  public onActionMove(event: PointerEvent) {
    if (!this.isDrawing) return;

    if (!this.isInsideLasso) return;

    const currentPoint = { x: event.clientX, y: event.clientY };

    /**
     * Select Phase
     * 1. draw lasso shape in action canvas context
     * 2. collect points of lasso shape in order to generate PathShape
     */
    if (!this.isSelected) {
      this.currentLassoPoints.push(currentPoint);

      this.actionContext.lineTo(currentPoint.x, currentPoint.y);
      this.actionContext.stroke();

      return;
    }

    /**
     * Transform Phase
     *  1. when isSelected is true, there should be a lasso shape and selected shapes
     *  2. clear action canvas context and redraw selected shapes with translated position
     *   instead of translating actual shapes, translate the action ctx for performance
     */

    if (!this.currentLassoShape) return;

    if (!this.lastPoint) return;

    if (!this.derivative) return;

    // translate coordinates
    const dx = event.clientX - this.lastPoint.x;
    const dy = event.clientY - this.lastPoint.y;

    this.clearActionContext();
    this.actionContext.translate(dx, dy);

    // draw lasso shape
    this.actionContext.save();
    this.actionContext.strokeStyle = this.currentLassoStyles.color;
    this.actionContext.lineWidth = this.currentLassoStyles.width;
    this.actionContext.setLineDash([5, 5]);
    this.currentLassoShape.draw(this.actionContext);
    this.actionContext.restore();

    this.currentIntersectedShapes.forEach((shape) =>
      shape.draw(this.actionContext),
    );

    this.lastPoint = currentPoint;
    this.derivative.x += dx;
    this.derivative.y += dy;
  }

  public onActionEnd() {
    this.isDrawing = false;

    if (!this.isInsideLasso) return;

    /**
     * Select Phase
     * 1. finish drawing lasso shape in action canvas context
     * 2. generate lasso shape using collected points
     * 3. calculate & save intersected shapes using FindIntersectionCommmand
     * 4. draw intersected shapes in action canvas context
     */
    if (!this.isSelected) {
      this.isSelected = true;

      this.actionContext.closePath();
      this.actionContext.stroke();

      this.currentLassoShape = new PathShape({
        points: this.currentLassoPoints,
        style: this.currentLassoStyles,
        closed: true,
      });

      const findIntersectionCommand = new FindIntersectionCommand({
        intersectedShapes: this.currentIntersectedShapes,
        target: this.currentLassoShape,
        deleteIfIntersected: false,
        /**
         * if there are any intersecting shapes after command execution,
         * we should update currentLassoShape to RectangleShape.
         *
         * if there are no intersecting shapes, we should cleanup lasso action phase
         */
        callback: () => {
          if (this.currentIntersectedShapes.length === 0) {
            this.cleanup();
          } else {
            this.clearActionContext();
            const boundingBox = this.getBoundingBox(
              this.currentIntersectedShapes,
            );
            this.currentLassoShape = new RectangleShape({
              start: { x: boundingBox.left, y: boundingBox.top },
              width: boundingBox.width,
              height: boundingBox.height,
              style: {
                strokeColor: this.currentLassoStyles.color,
                strokeWidth: this.currentLassoStyles.width,
                fillColor: 'transparent',
              },
            });
            this.actionContext.save();
            this.actionContext.setLineDash([5, 5]);
            this.currentLassoShape.draw(this.actionContext);
            this.actionContext.restore();
          }
        },
      });

      // restore action context before lasso
      this.actionContext.restore();

      return findIntersectionCommand;
    }

    /**
     * Transform Phase
     */
    const transformCommand = new TransformCommand({
      shapes: this.currentIntersectedShapes,
      derivative: { ...this.derivative }, // we have to make new object to prevent reference copy
    });

    // restore action context's translation
    this.actionContext.restore();

    return transformCommand;
  }

  public cleanup() {
    this.clearActionContext();
    this.isSelected = false;
    this.isDrawing = false;
    this.isInsideLasso = false;
    this.currentLassoShape = null;
    this.currentLassoPoints = [];
    this.currentIntersectedShapes = [];
    this.derivative = { x: 0, y: 0 };
  }

  private getBoundingBox(shapes: Shape[]): DOMRect {
    const boundingBox = shapes.reduce(
      (acc, shape) => {
        const shapeBoundingBox = shape.getBoundingBox();

        return {
          left: Math.min(acc.left, shapeBoundingBox.left),
          top: Math.min(acc.top, shapeBoundingBox.top),
          right: Math.max(acc.right, shapeBoundingBox.right),
          bottom: Math.max(acc.bottom, shapeBoundingBox.bottom),
        };
      },
      {
        left: Number.MAX_SAFE_INTEGER,
        top: Number.MAX_SAFE_INTEGER,
        right: Number.MIN_SAFE_INTEGER,
        bottom: Number.MIN_SAFE_INTEGER,
      },
    );

    return new DOMRect(
      boundingBox.left - LASSO_BOUNDING_BOX_PADDING,
      boundingBox.top - LASSO_BOUNDING_BOX_PADDING,
      boundingBox.right - boundingBox.left + LASSO_BOUNDING_BOX_PADDING * 2,
      boundingBox.bottom - boundingBox.top + LASSO_BOUNDING_BOX_PADDING * 2,
    );
  }
}

export default LassoAction;
