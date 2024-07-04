import Command from '@/components/common/Canvas/commands/Command';
import {
  type CommandObject,
  CommandType,
} from '@/components/common/Canvas/commands/CommandObject';
import PaintManager from '@/components/common/Canvas/managers/PaintManager';

export interface ResetCommandObject extends CommandObject {}

class ResetCommand extends Command {
  public execute(paintManager: PaintManager) {
    paintManager.reset(true);
  }

  public toObject(): ResetCommandObject {
    return {
      type: CommandType.RESET,
    };
  }
}

export default ResetCommand;
