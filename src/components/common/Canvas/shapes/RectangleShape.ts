import { type Point } from '@/components/common/Canvas/interfaces/Point';
import Shape, {
  type ShapeProps,
} from '@/components/common/Canvas/shapes/Shape';

import { type ShapeObject, ShapeType } from './ShapeObject';

export interface RectangleShapeObject extends ShapeObject {
  start: Point;
  width: number;
  height: number;
  style: RectangleShapeStyle;
}

interface RectangleShapeStyle {
  strokeWidth?: number;
  strokeColor?: string;
  fillColor?: string;
  composite?: GlobalCompositeOperation;
}

interface RectangleShapeProps extends ShapeProps {
  start: Point;
  width: number;
  height: number;
  style: RectangleShapeStyle;
}

class RectangleShape extends Shape {
  private start: Point;
  private width: number;
  private height: number;
  private style: RectangleShapeStyle;
  private freeze = false;

  constructor({
    id,
    start,
    width,
    height,
    style,
    freeze,
  }: RectangleShapeProps) {
    super({ id });

    this.start = start;
    this.width = width;
    this.height = height;
    this.style = style;
    this.freeze = freeze ?? false;
  }

  public draw(context: CanvasRenderingContext2D) {
    context.save();

    /** Style */
    context.strokeStyle = this.style.strokeColor ?? 'transparent';
    context.lineWidth = this.style.strokeWidth ?? 0;
    context.fillStyle = this.style.fillColor ?? 'transparent';
    context.globalCompositeOperation = this.style.composite ?? 'source-over';

    /** Outline */
    context.beginPath();
    context.rect(this.start.x, this.start.y, this.width, this.height);

    /** Paint */
    context.stroke();
    context.fill();

    context.restore();
  }

  public translate(derivative: Point): Shape {
    const translatedStart = {
      x: this.start.x + derivative.x,
      y: this.start.y + derivative.y,
    };

    return new RectangleShape({
      id: this.id,
      start: translatedStart,
      width: this.width,
      height: this.height,
      style: this.style,
    });
  }

  public getBoundingBox() {
    return new DOMRect(this.start.x, this.start.y, this.width, this.height);
  }

  public isPointInShape(point: Point): boolean {
    if (this.freeze) return false;

    // 1. Bounding box 비교
    const boundingBox = this.getBoundingBox();

    if (
      point.x < boundingBox.left ||
      point.x > boundingBox.right ||
      point.y < boundingBox.top ||
      point.y > boundingBox.bottom
    ) {
      return false;
    }

    return true;
  }

  public isIntersecting(target: Shape) {
    if (this.freeze) return false;

    // 1. Bounding box 비교
    const currentBoundingBox = this.getBoundingBox();
    const targetBoundingBox = target.getBoundingBox();

    if (
      currentBoundingBox.left > targetBoundingBox.right ||
      currentBoundingBox.right < targetBoundingBox.left ||
      currentBoundingBox.top > targetBoundingBox.bottom ||
      currentBoundingBox.bottom < targetBoundingBox.top
    ) {
      return false;
    }

    return true;
  }

  public toObject(): RectangleShapeObject {
    return {
      _id: this.id,
      type: ShapeType.RECTANGLE,
      start: this.start,
      width: this.width,
      height: this.height,
      style: this.style,
      freeze: this.freeze,
    };
  }
}

export default RectangleShape;
