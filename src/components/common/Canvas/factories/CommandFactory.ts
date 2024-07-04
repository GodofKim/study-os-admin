import AddCommand, {
  type AddCommandObject,
} from '@/components/common/Canvas/commands/AddCommand';
import type Command from '@/components/common/Canvas/commands/Command';
import {
  type CommandObject,
  CommandType,
} from '@/components/common/Canvas/commands/CommandObject';
import DeleteCommand, {
  type DeleteCommandObject,
} from '@/components/common/Canvas/commands/DeleteCommand';
import ResetCommand from '@/components/common/Canvas/commands/ResetCommand';
import TransformCommand, {
  type TransformCommandObject,
} from '@/components/common/Canvas/commands/TransformCommand';

import { ShapeFactory } from './ShapeFactory';

export class CommandFactory {
  static generateCommand(commandObject: CommandObject): Command {
    switch (commandObject.type) {
      case CommandType.ADD: {
        const addCommandObject = commandObject as AddCommandObject;
        return new AddCommand({
          stackable: true,
          shapes: addCommandObject.shapes.map((shapeObject) =>
            ShapeFactory.generateShape(shapeObject),
          ),
        });
      }
      case CommandType.DELETE: {
        const deleteCommandObject = commandObject as DeleteCommandObject;
        return new DeleteCommand({
          stackable: true,
          ids: deleteCommandObject.ids,
        });
      }
      case CommandType.TRANSFORM: {
        const transformCommandObject = commandObject as TransformCommandObject;
        return new TransformCommand({
          stackable: true,
          shapes: transformCommandObject.shapes.map((shapeObject) =>
            ShapeFactory.generateShape(shapeObject),
          ),
          derivative: transformCommandObject.derivative,
        });
      }
      case CommandType.RESET: {
        return new ResetCommand({ stackable: true });
      }
      case CommandType.FIND_INTERSECTION:
        throw new Error('Not supported Serializing FindIntersectionCommand');
      default:
        throw new Error(`Unknown command type: ${commandObject.type}`);
    }
  }
}
