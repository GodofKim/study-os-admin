import Command, {
  type CommandProps,
} from '@/components/common/Canvas/commands/Command';
import PaintManager from '@/components/common/Canvas/managers/PaintManager';
import Shape from '@/components/common/Canvas/shapes/Shape';
import type { ShapeObject } from '@/components/common/Canvas/shapes/ShapeObject';

import { type CommandObject, CommandType } from './CommandObject';

export interface AddCommandObject extends CommandObject {
  shapes: ShapeObject[];
}

interface AddCommandProps extends CommandProps {
  shapes: Shape[];
}

class AddCommand extends Command {
  private shapes: Shape[];

  constructor({ shapes, stackable }: AddCommandProps) {
    super({ stackable });

    this.shapes = shapes;
    this.stackable = stackable ?? true;
  }

  public execute(paintManager: PaintManager) {
    paintManager.add(this.shapes, true);
  }

  public toObject(): AddCommandObject {
    return {
      type: CommandType.ADD,
      shapes: this.shapes.map((shape) => shape.toObject()),
    };
  }
}

export default AddCommand;
