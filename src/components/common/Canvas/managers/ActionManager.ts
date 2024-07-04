import Action, {
  type ActionConstructor,
  type ActionName,
  type ActionProperties,
} from '@/components/common/Canvas/actions/Action';
import { Manager } from '@/components/common/Canvas/managers/Manager';

class ActionManager extends Manager {
  private actions: Record<ActionName, Action>;
  private _currentAction: Action | undefined;

  constructor() {
    super();
    this.actions = {};
  }

  get currentAction() {
    return this._currentAction;
  }

  addAction(ActionConstructor: ActionConstructor) {
    if (!ActionConstructor.actionName) {
      throw new Error('Action name is not defined!');
    }

    this.actions[ActionConstructor.actionName] = new ActionConstructor({
      actionContext: this.context,
    });
  }

  getAction(name: ActionName) {
    const action = this.actions[name];

    if (!action) {
      throw new Error(`${name} is not registered!`);
    }

    return action;
  }

  updateAction<T extends ActionName>(name: T, properties: ActionProperties<T>) {
    const action = this.getAction(name);

    action.updateProperties(properties);
  }

  setCurrentAction(name: ActionName) {
    const action = this.getAction(name);

    this._currentAction = action;
  }

  redraw(): void {
    // nothing
  }
}

export default ActionManager;
