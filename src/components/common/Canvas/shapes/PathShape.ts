import { type Point } from '@/components/common/Canvas/interfaces/Point';
import Shape, {
  type ShapeProps,
} from '@/components/common/Canvas/shapes/Shape';

import { type ShapeObject, ShapeType } from './ShapeObject';

export interface PathShapeObject extends ShapeObject {
  points: Point[];
  style: PathStyle;
  closed: boolean;
}

interface PathStyle {
  color: string;
  width: number;
  join?: CanvasLineJoin;
  endpoint?: CanvasLineCap;
  composite?: GlobalCompositeOperation;
}

interface PathShapeProps extends ShapeProps {
  points: Point[];
  closed?: boolean;
  style: PathStyle;
}

class PathShape extends Shape {
  private points: Point[];
  private closed: boolean;
  private style: PathStyle;
  private freeze = false;

  constructor({ id, points, closed, style, freeze }: PathShapeProps) {
    super({ id });

    this.points = points;
    this.closed = closed ?? false;
    this.style = style;
    this.freeze = freeze ?? false;
  }

  public draw(context: CanvasRenderingContext2D) {
    context.save();

    /** Style */
    context.strokeStyle = this.style.color;
    context.lineWidth = this.style.width;
    context.lineJoin = this.style.join ?? 'round';
    context.lineCap = this.style.endpoint ?? 'round';
    context.globalCompositeOperation = this.style.composite ?? 'source-over';

    /** Outline */
    context.beginPath();
    this.points.forEach((point, index) => {
      if (index === 0) context.moveTo(point.x, point.y);
      else context.lineTo(point.x, point.y);
    });

    if (this.closed) context.closePath();

    /** Paint */
    context.stroke();

    context.restore();
  }

  public translate(derivative: Point) {
    const translatedPoints = this.points.map(({ x, y }) => ({
      x: x + derivative.x,
      y: y + derivative.y,
    }));

    return new PathShape({
      id: this.id,
      points: translatedPoints,
      style: this.style,
      closed: this.closed,
    });
  }

  public getBoundingBox() {
    const startPointX = Math.min(...this.points.map((point) => point.x));
    const startPointY = Math.min(...this.points.map((point) => point.y));
    const endPointX = Math.max(...this.points.map((point) => point.x));
    const endPointY = Math.max(...this.points.map((point) => point.y));

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

    return context.isPointInPath(point.x, point.y);
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
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    target.draw(context);

    return this.points.some(({ x, y }) => context.isPointInPath(x, y));
  }

  public toObject(): PathShapeObject {
    return {
      _id: this.id,
      type: ShapeType.PATH,
      points: this.points,
      style: this.style,
      closed: this.closed,
      freeze: this.freeze,
    };
  }
}

export default PathShape;
