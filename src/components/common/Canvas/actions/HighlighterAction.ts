import Action, {
  type ActionParameters,
} from '@/components/common/Canvas/actions/Action';
import AddCommand from '@/components/common/Canvas/commands/AddCommand';
import { type Curve } from '@/components/common/Canvas/interfaces/Curve';
import { type Point } from '@/components/common/Canvas/interfaces/Point';
import CurveShape from '@/components/common/Canvas/shapes/CurveShape';

const OPTIMIZATION_THRESHOLD_DISTANCE = 5;

interface HighlighterProperties {
  color: string;
  width: number;
}

class HighlighterAction extends Action<HighlighterProperties> {
  static actionName = 'HighlighterAction';
  protected actionContext: CanvasRenderingContext2D;

  private isDrawing = false;

  private curves: Curve[] = [];
  private points: Point[] = [];

  constructor({ actionContext }: ActionParameters) {
    const defaultProperties: HighlighterProperties = {
      color: '#FFFF0070',
      width: 15,
    };
    super(defaultProperties);

    this.actionContext = actionContext;
  }

  private calculateDistance(point1: Point, point2: Point) {
    return Math.sqrt(
      Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2),
    );
  }

  public onActionStart(event: PointerEvent) {
    this.isDrawing = true;

    this.actionContext.save();
    this.actionContext.lineCap = 'round';
    this.actionContext.lineJoin = 'round';
    this.actionContext.strokeStyle = this.properties.color;
    this.actionContext.lineWidth = this.properties.width;

    const currentPoint = { x: event.clientX, y: event.clientY };

    this.points.push(currentPoint);
  }

  public onActionMove(event: PointerEvent) {
    if (!this.isDrawing) return;

    const currentPoint = { x: event.clientX, y: event.clientY };
    const lastPoint = this.points[this.points.length - 1];
    if (!lastPoint) return;

    const { x: previousX, y: previousY } = lastPoint;
    const { x: currentX, y: currentY } = currentPoint;

    // Prevent points duplication
    if (previousX === currentX && previousY === currentY) return;

    const distance = this.calculateDistance(lastPoint, currentPoint);

    if (distance > OPTIMIZATION_THRESHOLD_DISTANCE) {
      if (this.points.length === 3) {
        if (!this.points[0] || !this.points[1] || !this.points[2]) return;

        this.points[2] = {
          x: 0.5 * this.points[1].x + 0.5 * currentX,
          y: 0.5 * this.points[1].y + 0.5 * currentY,
        };
        this.curves.push([this.points[0], this.points[1], this.points[2]]);
        this.points.splice(0, 2);

        this.clearActionContext();
        const instantShape = new CurveShape({
          curves: [...this.curves, this.points],
          style: this.properties,
        });
        instantShape.draw(this.actionContext);
      }

      this.points.push({ x: currentX, y: currentY });
    } else {
      // if distance is less than threshold, then remove last point to match 2 point logic
      if (this.points.length === 3) this.points.pop();

      if (this.points.length === 2) {
        if (!this.points[0]) return;

        this.points[1] = {
          x: 0.5 * this.points[0].x + 0.5 * currentX,
          y: 0.5 * this.points[0].y + 0.5 * currentY,
        };
        this.curves.push([this.points[0], this.points[1]]);
        this.points.splice(0, 1);

        this.clearActionContext();
        const instantShape = new CurveShape({
          curves: [...this.curves, this.points],
          style: this.properties,
        });
        instantShape.draw(this.actionContext);
      }

      this.points.push({ x: currentX, y: currentY });
    }
  }

  public onActionEnd() {
    this.isDrawing = false;

    const shape = new CurveShape({
      curves: [...this.curves, this.points],
      style: {
        ...this.properties,
        endpoint: 'round',
      },
    });

    const command = new AddCommand({
      shapes: [shape],
    });

    this.curves = [];
    this.points = [];
    this.clearActionContext();

    this.actionContext.restore();

    return command;
  }

  public cleanup() {
    this.isDrawing = false;
    this.curves = [];
    this.points = [];
  }
}

export default HighlighterAction;
