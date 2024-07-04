import Action, {
  type ActionParameters,
} from '@/components/common/Canvas/actions/Action';
import DeleteCommand from '@/components/common/Canvas/commands/DeleteCommand';
import FindIntersectionCommand from '@/components/common/Canvas/commands/FindIntersectionCommand';
import { type Point } from '@/components/common/Canvas/interfaces/Point';
import CircleShape from '@/components/common/Canvas/shapes/CircleShape';
import Shape from '@/components/common/Canvas/shapes/Shape';

interface EraserProperties {
  size: number;
}

class EraserAction extends Action<EraserProperties> {
  static actionName = 'EraserAction';

  protected actionContext: CanvasRenderingContext2D;

  private isDrawing = false;
  private selectedShapes: Shape[] = [];
  private points: Point[] = [];

  constructor({ actionContext }: ActionParameters) {
    const defaultProperties: EraserProperties = {
      size: 20,
    };
    super(defaultProperties);

    this.actionContext = actionContext;
  }

  public onActionStart(event: PointerEvent) {
    this.isDrawing = true;

    const eraser = new CircleShape({
      center: {
        x: event.clientX,
        y: event.clientY,
      },
      radius: this.properties.size,
      style: {
        fillColor: '#00000020',
      },
    });

    eraser.draw(this.actionContext);

    const currentPoint = { x: event.clientX, y: event.clientY };
    this.points.push(currentPoint);
  }

  public onActionMove(event: PointerEvent) {
    if (!this.isDrawing) return undefined;

    this.clearActionContext();

    const eraser = new CircleShape({
      center: {
        x: event.clientX,
        y: event.clientY,
      },
      radius: this.properties.size,
      style: {
        fillColor: '#00000020',
      },
    });

    this.points.push({ x: event.clientX, y: event.clientY });

    eraser.draw(this.actionContext);

    return new FindIntersectionCommand({
      intersectedShapes: this.selectedShapes,
      target: eraser,
      deleteIfIntersected: true,
    });
  }

  public onActionEnd() {
    this.isDrawing = false;

    this.clearActionContext();
    this.points.length = 0;

    /** 아무것도 지우지 않은 경우, stack에 쌓지 않습니다. */
    if (this.selectedShapes.length === 0) {
      return undefined;
    }

    const command = new DeleteCommand({
      ids: this.selectedShapes.map((shape) => shape.id),
    });

    this.selectedShapes.length = 0;

    return command;
  }

  public cleanup() {
    this.isDrawing = false;
    this.selectedShapes = [];
    this.points = [];
  }
}

export default EraserAction;
