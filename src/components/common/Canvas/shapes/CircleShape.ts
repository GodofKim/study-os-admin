import { type Point } from '@/components/common/Canvas/interfaces/Point';
import Shape, {
  type ShapeProps,
} from '@/components/common/Canvas/shapes/Shape';

import { type ShapeObject, ShapeType } from './ShapeObject';

export interface CircleShapeObject extends ShapeObject {
  center: Point;
  radius: number;
  style: CircleStyle;
}

interface CircleStyle {
  strokeWidth?: number;
  strokeColor?: string;
  fillColor?: string;
  composite?: GlobalCompositeOperation;
}

interface CircleShapeProps extends ShapeProps {
  center: Point;
  radius: number;
  style: CircleStyle;
}

class CircleShape extends Shape {
  private center: Point;
  private radius: number;
  private style: CircleStyle;
  private freeze = false;

  constructor({ id, center, radius, style, freeze }: CircleShapeProps) {
    super({ id });

    this.center = center;
    this.radius = radius;
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
    context.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);

    /** Paint */
    context.stroke();
    context.fill();

    context.restore();
  }

  public translate(derivative: Point): Shape {
    const translatedCenter = {
      x: this.center.x + derivative.x,
      y: this.center.y + derivative.y,
    };

    return new CircleShape({
      id: this.id,
      center: translatedCenter,
      radius: this.radius,
      style: this.style,
    });
  }

  public getBoundingBox() {
    const startPointX = this.center.x - this.radius;
    const startPointY = this.center.y - this.radius;
    const endPointX = this.center.x + this.radius;
    const endPointY = this.center.y + this.radius;

    return new DOMRect(
      startPointX,
      startPointY,
      endPointX - startPointX,
      endPointY - startPointY,
    );
  }

  public isPointInShape(point: Point) {
    if (this.freeze) return false;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;

    this.draw(context);

    return this.style.fillColor
      ? context.isPointInStroke(point.x, point.y)
      : context.isPointInPath(point.x, point.y);
  }

  public isIntersecting(target: Shape) {
    if (this.freeze) return false;

    // 1. compare with bounding box
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

    // 2. compare with path
    // it would be sufficient to compare with bounding box
    return true;
  }

  public toObject(): CircleShapeObject {
    return {
      _id: this.id,
      type: ShapeType.CIRCLE,
      center: this.center,
      radius: this.radius,
      style: this.style,
      freeze: this.freeze,
    };
  }
}

export default CircleShape;
