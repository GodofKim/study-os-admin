import Action, {
  type ActionConstructor,
  type ActionProperties,
} from '@/components/common/Canvas/actions/Action';
import CanvasRenderer, {
  type RenderParameters,
} from '@/components/common/Canvas/CanvasRenderer';
import ActionManager from '@/components/common/Canvas/managers/ActionManager';
import BackgroundManager, {
  type Background,
} from '@/components/common/Canvas/managers/BackgroundManager';
import CommandManager from '@/components/common/Canvas/managers/CommandManager';
import PaintManager from '@/components/common/Canvas/managers/PaintManager';

import type { CommandObject } from './commands/CommandObject';

class Canvas {
  private actionManager: ActionManager;
  private paintManager: PaintManager;
  private backgroundManager: BackgroundManager;

  private commandManager: CommandManager;
  private canvasRenderer: CanvasRenderer;

  constructor() {
    this.actionManager = new ActionManager();
    this.paintManager = new PaintManager();
    this.backgroundManager = new BackgroundManager();

    this.commandManager = new CommandManager({
      paintManager: this.paintManager,
    });
    this.canvasRenderer = new CanvasRenderer({
      actionManager: this.actionManager,
      backgroundManager: this.backgroundManager,
      paintManager: this.paintManager,
    });

    this.registerEvent();
  }

  private registerEvent() {
    let ongoingAction: Action | undefined;
    let currentPenId: number | undefined;

    const handleTouchEvent = (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };
    this.actionManager.canvas.addEventListener('touchstart', handleTouchEvent);
    this.actionManager.canvas.addEventListener('touchmove', handleTouchEvent);
    this.actionManager.canvas.addEventListener('touchend', handleTouchEvent);

    // TODO: handle rounded issue
    // this.actionManager.canvas.addEventListener('pointerenter', (event) => {
    //   console.log('POINTER ENTER');
    // });
    // this.actionManager.canvas.addEventListener('pointerleave', (event) => {
    //   console.log('POINTER LEAVE');ㅕ
    // });

    this.actionManager.canvas.addEventListener('pointerdown', (event) => {
      const transformedEvent = this.canvasRenderer.transformPointerEvent(event);

      if (!this.canvasRenderer.isPointerInClippedArea(transformedEvent)) {
        ongoingAction?.cleanup();
        ongoingAction = undefined;

        return;
      }

      if (event.pointerType === 'mouse') {
        ongoingAction?.cleanup();
        ongoingAction = undefined;

        return;
      }

      if (event.pointerType === 'pen') {
        event.stopPropagation();

        // if pen event already exists, then discard event
        if (currentPenId !== undefined) return;

        ongoingAction = this.actionManager.currentAction;
        currentPenId = event.pointerId;

        const command = ongoingAction?.onActionStart(transformedEvent);

        if (command) this.commandManager.push(command);

        // if pen event occurs, then discard touch event
        return;
      }

      if (event.pointerType === 'touch') {
        this.canvasRenderer.handlePinchZoomOnStart(event);
      }
    });

    this.actionManager.canvas.addEventListener('pointermove', (event) => {
      if (event.pointerType === 'mouse') {
        ongoingAction?.cleanup();
        ongoingAction = undefined;

        return;
      }

      if (event.pointerType === 'pen') {
        event.stopPropagation();

        // if pen event is not current active pen event, then discard event
        if (currentPenId !== event.pointerId) return;

        const transformedEvent =
          this.canvasRenderer.transformPointerEvent(event);
        const command = ongoingAction?.onActionMove(transformedEvent);

        if (command) this.commandManager.push(command);

        // if pen event occurs, then discard touch event
        return;
      }

      if (event.pointerType === 'touch') {
        this.canvasRenderer.handlePinchZoomOnMove(event);
      }
    });

    this.actionManager.canvas.addEventListener('pointerup', (event) => {
      if (event.pointerType === 'mouse') {
        ongoingAction?.cleanup();
        ongoingAction = undefined;

        return;
      }

      if (event.pointerType === 'pen') {
        event.stopPropagation();
        // reset current pen Id
        currentPenId = undefined;

        const transformedEvent =
          this.canvasRenderer.transformPointerEvent(event);
        const command = ongoingAction?.onActionEnd(transformedEvent);

        if (command) this.commandManager.push(command);

        // if pen event occurs, then discard touch event
        return;
      }

      if (event.pointerType === 'touch') {
        this.canvasRenderer.handlePinchZoomOnEnd(event);
      }
    });

    /**
     * When user accidently trigger touch event (e.g Palm Rejection)
     * pointer up event is not triggered, although pointer down event is triggered.
     * So we need to handle this case using pointercancel event.
     * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/pointercancel_event
     */
    this.actionManager.canvas.addEventListener('pointercancel', (event) => {
      if (event.pointerType === 'touch') {
        this.canvasRenderer.handlePinchZoomOnEnd(event);
      }
    });
  }

  public registerStateChangeListener(listener: () => void) {
    this.commandManager.addStateChangeListener(listener);
  }

  public removeStateChangeListener(listener: () => void) {
    this.commandManager.removeStateChangeListener(listener);
  }

  public render(params: RenderParameters) {
    this.canvasRenderer.render(params);
  }

  public setBackground(background: Background) {
    this.backgroundManager.setBackground(background);
  }

  public registerAction(ActionConstructor: ActionConstructor) {
    this.actionManager.addAction(ActionConstructor);
  }

  public useAction<T extends ActionConstructor>(
    actionConstructor: T,
    properties?: ActionProperties<T>,
  ) {
    // cleanup previous action (if exists)
    this.actionManager.currentAction?.cleanup();

    if (properties) {
      this.actionManager.updateAction(actionConstructor.actionName, properties);
    }

    this.actionManager.setCurrentAction(actionConstructor.actionName);
  }

  public reset() {
    this.actionManager.currentAction?.cleanup();
    this.commandManager.reset();
  }

  get undoable() {
    return this.commandManager.undoable;
  }

  get redoable() {
    return this.commandManager.redoable;
  }

  public undo() {
    this.actionManager.currentAction?.cleanup();
    this.commandManager.undo();
  }

  public redo() {
    this.actionManager.currentAction?.cleanup();
    this.commandManager.redo();
  }

  public import(commandObjects: CommandObject[]) {
    this.actionManager.currentAction?.cleanup();
    this.commandManager.import(commandObjects);
  }

  public export(): CommandObject[] {
    return this.commandManager.export();
  }

  public async screenshot(
    background: Background,
    commandObjects: CommandObject[],
  ) {
    this.actionManager.currentAction?.cleanup();
    this.reset();
    this.import(commandObjects);
    return this.canvasRenderer.screenshot(background);
  }
}

export default Canvas;
