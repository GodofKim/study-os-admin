import Command, {
  type CommandProps,
} from '@/components/common/Canvas/commands/Command';
import PaintManager from '@/components/common/Canvas/managers/PaintManager';
import Shape from '@/components/common/Canvas/shapes/Shape';
import type { ShapeObject } from '@/components/common/Canvas/shapes/ShapeObject';

import { type CommandObject, CommandType } from './CommandObject';

export interface FindIntersectionCommandObject extends CommandObject {
  targetShape: ShapeObject;
  intersectedShapes: ShapeObject[];
}

interface FindIntersectionCommandProps extends CommandProps {
  intersectedShapes: Shape[];
  target: Shape;
  deleteIfIntersected?: boolean;
  /**
   * if you want to do something after execute this command in Action Phase,
   * you can pass callback function.
   * e.g) handle some logic in onActionEnd phase with modified intersectedShapes
   */
  callback?: () => void;
}

class FindIntersectionCommand extends Command {
  private intersectedShapes: Shape[];
  private target: Shape;
  private deleteIfIntersected: boolean;
  private callback?: () => void;

  constructor({
    stackable = false,
    intersectedShapes,
    target,
    deleteIfIntersected = false,
    callback,
  }: FindIntersectionCommandProps) {
    super({ stackable });

    this.intersectedShapes = intersectedShapes;
    this.target = target;
    this.deleteIfIntersected = deleteIfIntersected;
    this.callback = callback;
  }

  public execute(paintManager: PaintManager) {
    const shapes = paintManager.getIntersectedShapes(this.target);

    shapes.forEach((shape) => {
      if (!this.intersectedShapes.includes(shape)) {
        this.intersectedShapes.push(shape);

        if (this.deleteIfIntersected) {
          paintManager.delete([shape.id], true);
        }
      }
    });

    // handle callback after modifying intersectedShapes
    this.callback?.();
  }

  public toObject(): FindIntersectionCommandObject {
    return {
      type: CommandType.FIND_INTERSECTION,
      targetShape: this.target.toObject(),
      intersectedShapes: this.intersectedShapes.map((shape) =>
        shape.toObject(),
      ),
    };
  }
}

export default FindIntersectionCommand;
