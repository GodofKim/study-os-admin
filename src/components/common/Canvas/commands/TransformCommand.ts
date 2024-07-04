import Command, {
  type CommandProps,
} from '@/components/common/Canvas/commands/Command';
import { type Point } from '@/components/common/Canvas/interfaces/Point';
import PaintManager from '@/components/common/Canvas/managers/PaintManager';
import Shape from '@/components/common/Canvas/shapes/Shape';
import type { ShapeObject } from '@/components/common/Canvas/shapes/ShapeObject';

import { type CommandObject, CommandType } from './CommandObject';

export interface TransformCommandObject extends CommandObject {
  shapes: ShapeObject[];
  derivative: Point;
}

interface TransformCommandProps extends CommandProps {
  shapes: Shape[];
  derivative: Point;
}

class TransformCommand extends Command {
  private shapes: Shape[];
  private derivative: Point;

  constructor({ shapes, derivative, stackable }: TransformCommandProps) {
    super({ stackable });

    this.shapes = shapes;
    this.derivative = derivative;
  }

  public execute(paintManager: PaintManager) {
    paintManager.delete(
      this.shapes.map((shape) => shape.id),
      true,
    );
    paintManager.add(
      this.shapes.map((shape) => shape.translate(this.derivative)),
      true,
    );
  }

  public toObject(): TransformCommandObject {
    return {
      type: CommandType.TRANSFORM,
      shapes: this.shapes.map((shape) => shape.toObject()),
      derivative: this.derivative,
    };
  }
}

export default TransformCommand;
