import PaintManager from '@/components/common/Canvas/managers/PaintManager';

import type { CommandObject } from './CommandObject';

export interface CommandProps {
  stackable?: boolean;
}
abstract class Command {
  protected stackable: boolean;

  constructor({ stackable }: CommandProps = {}) {
    this.stackable = stackable ?? true;
  }

  public abstract execute(paintManager: PaintManager): void;

  public abstract toObject(): CommandObject;

  public get isStackable(): boolean {
    return this.stackable;
  }
}

export default Command;
