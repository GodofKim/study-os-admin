export enum CommandType {
  ADD = 'ADD',
  DELETE = 'DELETE',
  TRANSFORM = 'TRANSFORM',
  RESET = 'RESET',

  // not stackable
  FIND_INTERSECTION = 'FIND_INTERSECTION',
}

// abstract interface
export interface CommandObject {
  type: CommandType;
}
