import type Shape from './Shape';

export enum ShapeType {
  CIRCLE = 'CIRCLE',
  CURVE = 'CURVE',
  PATH = 'PATH',
  RECTANGLE = 'RECTANGLE',

  // not for paint manager type for now
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

// abstract type
export interface ShapeObject {
  _id: Shape['_id'];
  type: ShapeType;
  /**
   * If true, the shape will not be able to be translated or deleted.
   */
  freeze?: boolean;
}
