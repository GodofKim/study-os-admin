import { type Point } from '@/components/common/Canvas/interfaces/Point';

import type { ShapeObject } from './ShapeObject';

export interface ShapeProps {
  id?: number;
  /**
   * If true, the shape will not be able to be translated or deleted.
   */
  freeze?: boolean;
}

abstract class Shape {
  private _id: number;

  constructor({ id }: ShapeProps = {}) {
    this._id = id ?? Date.now();
  }

  public get id() {
    return this._id;
  }

  public abstract draw(context: CanvasRenderingContext2D): void;

  public abstract translate(derivative: Point): Shape;

  public abstract getBoundingBox(): DOMRect;

  public abstract isIntersecting(shape: Shape): boolean;

  public abstract isPointInShape(point: Point): boolean;

  public abstract toObject(): ShapeObject;
}

export default Shape;
