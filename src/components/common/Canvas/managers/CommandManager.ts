import Command from '@/components/common/Canvas/commands/Command';
import PaintManager from '@/components/common/Canvas/managers/PaintManager';

import type { CommandObject } from '../commands/CommandObject';
import { CommandFactory } from '../factories/CommandFactory';

class CommandManager {
  private commandStack: Command[];
  private commandStackPointer: number;

  private paintManager: PaintManager;
  private stateChangeListeners: (() => void)[];

  constructor({ paintManager }: { paintManager: PaintManager }) {
    this.commandStack = [];
    this.commandStackPointer = -1;

    this.paintManager = paintManager;
    this.stateChangeListeners = [];
  }

  addStateChangeListener(listener: () => void) {
    this.stateChangeListeners.push(listener);
  }

  removeStateChangeListener(listener: () => void) {
    this.stateChangeListeners = this.stateChangeListeners.filter(
      (l) => l !== listener,
    );
  }

  private notifyStateChange() {
    this.stateChangeListeners.forEach((listener) => listener());
  }

  import(commandObjects: CommandObject[]) {
    commandObjects.forEach((commandObject) => {
      const command = CommandFactory.generateCommand(commandObject);
      this.push(command);
    });
    this.notifyStateChange();
  }

  export(): CommandObject[] {
    return this.commandStack
      .slice(0, this.commandStackPointer + 1)
      .map((command) => command.toObject());
  }

  reset() {
    this.commandStack = [];
    this.commandStackPointer = -1;
    this.paintManager.reset(true);
  }

  push(command: Command) {
    command.execute(this.paintManager);

    if (command.isStackable) {
      this.commandStack.splice(this.commandStackPointer + 1);
      this.commandStack.push(command);
      this.commandStackPointer += 1;
      this.notifyStateChange();
    }
  }

  get redoable() {
    return this.commandStackPointer < this.commandStack.length - 1;
  }

  get undoable() {
    return this.commandStackPointer >= 0;
  }

  redo() {
    if (this.commandStackPointer >= this.commandStack.length - 1) {
      return;
    }

    this.commandStackPointer += 1;

    this.commandStack[this.commandStackPointer]?.execute(this.paintManager);

    this.notifyStateChange();
  }

  undo() {
    if (this.commandStackPointer < 0) {
      return;
    }

    this.commandStackPointer -= 1;
    this.paintManager.reset(true);

    for (let i = 0; i <= this.commandStackPointer; i += 1) {
      this.commandStack[i]?.execute(this.paintManager);
    }

    this.notifyStateChange();
  }
}

export default CommandManager;
