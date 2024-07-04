import { Manager } from '@/components/common/Canvas/managers/Manager';
import Shape from '@/components/common/Canvas/shapes/Shape';

class PaintManager extends Manager {
  private shapes: Shape[];

  constructor() {
    super();

    this.shapes = [];
  }

  /**
   * Shape
   */

  add(newShapes: Shape[], draw = false) {
    // using binary search to insert new shapes in order
    newShapes.forEach((newShape) => {
      let low = 0;
      let high = this.shapes.length;

      while (low < high) {
        const mid = Math.floor((low + high) / 2);

        if (this.shapes[mid]!.id < newShape.id) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }

      this.shapes.splice(low, 0, newShape);
    });

    if (draw) this.draw(newShapes);
  }

  delete(ids: Shape['id'][], redraw = false) {
    this.shapes = this.shapes.filter((shape) => !ids.includes(shape.id));

    if (redraw) this.redraw();
  }

  reset(redraw = false) {
    this.shapes = [];

    if (redraw) this.redraw();
  }

  getIntersectedShapes(target: Shape) {
    return this.shapes.filter((shape) => shape.isIntersecting(target));
  }

  private draw(newShapes: Shape[]) {
    newShapes.forEach((shape) => shape.draw(this.context));
  }

  redraw() {
    this.clear();
    this.shapes.forEach((shape) => shape.draw(this.context));
  }
}

export default PaintManager;
