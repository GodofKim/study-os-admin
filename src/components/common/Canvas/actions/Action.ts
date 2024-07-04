import type Command from '@/components/common/Canvas/commands/Command';

abstract class Action<Properties = unknown> {
  static actionName: string;

  protected abstract actionContext: CanvasRenderingContext2D;

  private _properties: Properties;

  constructor(defaultProperties: Properties) {
    this._properties = defaultProperties;
  }

  get properties() {
    return this._properties;
  }

  protected clearActionContext() {
    this.actionContext.save();
    this.actionContext.resetTransform();
    this.actionContext.clearRect(
      0,
      0,
      this.actionContext.canvas.width,
      this.actionContext.canvas.height,
    );
    this.actionContext.restore();
  }

  public updateProperties(properties: Properties) {
    this._properties = { ...this._properties, ...properties };
  }

  public abstract onActionStart(event: PointerEvent): Command | void;

  public abstract onActionMove(event: PointerEvent): Command | void;

  public abstract onActionEnd(event: PointerEvent): Command | void;

  public abstract cleanup(): void;
}

export default Action;

/**
 * Types
 */

export interface ActionParameters {
  actionContext: CanvasRenderingContext2D;
}

export interface ActionConstructor<Properties = unknown> {
  readonly actionName: string;
  new (params: ActionParameters): Action<Properties>;
}

export type ActionName<Properties = unknown> =
  ActionConstructor<Properties>['name'];

export type ActionProperties<T> =
  T extends ActionConstructor<infer Properties>
    ? Properties
    : T extends ActionName<infer Properties>
      ? Properties
      : never;
