import { type Curve } from '@/components/common/Canvas/interfaces/Curve';
import { type Point } from '@/components/common/Canvas/interfaces/Point';
import Shape, {
  type ShapeProps,
} from '@/components/common/Canvas/shapes/Shape';

import { type ShapeObject, ShapeType } from './ShapeObject';

export interface CurveShapeObject extends ShapeObject {
  curves: Curve[];
  style: CurveStyle;
  closed?: boolean;
}

interface CurveStyle {
  color: string;
  width: number;
  join?: CanvasLineJoin;
  endpoint?: CanvasLineCap;
  composite?: GlobalCompositeOperation;
}

interface CurveShapeProps extends ShapeProps {
  curves: Curve[];
  style: CurveStyle;
  closed?: boolean;
}

class CurveShape extends Shape {
  private curves: Curve[];
  private style: CurveStyle;
  private closed: boolean;
  private freeze = false;

  constructor({ id, curves, style, closed, freeze }: CurveShapeProps) {
    super({ id });

    this.curves = curves;
    this.style = style;
    this.closed = closed ?? false;
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
    this.curves.forEach((curve) => {
      switch (curve.length) {
        case 1:
          context.moveTo(curve[0]!.x, curve[0]!.y);
          context.lineTo(curve[0]!.x + 0.1, curve[0]!.y);
          break;
        case 2:
          context.moveTo(curve[0]!.x, curve[0]!.y);
          context.lineTo(curve[1]!.x, curve[1]!.y);
          break;
        case 3:
          context.moveTo(curve[0]!.x, curve[0]!.y);
          context.quadraticCurveTo(
            curve[1]!.x,
            curve[1]!.y,
            curve[2]!.x,
            curve[2]!.y,
          );
          break;
        case 4:
          context.moveTo(curve[0]!.x, curve[0]!.y);
          context.bezierCurveTo(
            curve[1]!.x,
            curve[1]!.y,
            curve[2]!.x,
            curve[2]!.y,
            curve[3]!.x,
            curve[3]!.y,
          );
          break;
        default:
          // Invalid curve
          break;
      }
    });

    if (this.closed) context.closePath();

    /** Paint */
    context.stroke();

    context.restore();
  }

  public translate(derivative: Point) {
    const translatedCurves = this.curves.map((curve) =>
      curve.map(({ x, y }) => ({
        x: x + derivative.x,
        y: y + derivative.y,
      })),
    );

    return new CurveShape({
      id: this.id,
      curves: translatedCurves,
      style: this.style,
      closed: this.closed,
    });
  }

  public getBoundingBox() {
    const points = this.curves.flat();

    const startPointX = Math.min(...points.map((point) => point.x));
    const startPointY = Math.min(...points.map((point) => point.y));
    const endPointX = Math.max(...points.map((point) => point.x));
    const endPointY = Math.max(...points.map((point) => point.y));

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

    const points = this.curves.flat();

    return points.some(({ x, y }) => context.isPointInPath(x, y));
  }

  public toObject(): CurveShapeObject {
    return {
      _id: this.id,
      type: ShapeType.CURVE,
      curves: this.curves,
      style: this.style,
      closed: this.closed,
      freeze: this.freeze,
    };
  }
}

export default CurveShape;
