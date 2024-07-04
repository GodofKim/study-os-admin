import Command, {
  type CommandProps,
} from '@/components/common/Canvas/commands/Command';
import PaintManager from '@/components/common/Canvas/managers/PaintManager';
import Shape from '@/components/common/Canvas/shapes/Shape';

import { type CommandObject, CommandType } from './CommandObject';

export interface DeleteCommandObject extends CommandObject {
  ids: Shape['id'][];
}

interface DeleteCommandProps extends CommandProps {
  ids: Shape['id'][];
}

class DeleteCommand extends Command {
  private ids: Shape['id'][];

  constructor({ ids, stackable }: DeleteCommandProps) {
    super({ stackable });

    this.ids = ids;
  }

  public execute(paintManager: PaintManager) {
    paintManager.delete(this.ids, true);
  }

  public toObject(): DeleteCommandObject {
    return {
      type: CommandType.DELETE,
      ids: this.ids,
    };
  }
}

export default DeleteCommand;
