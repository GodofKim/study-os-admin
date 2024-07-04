import { type Point } from '@/components/common/Canvas/interfaces/Point';
import Shape, {
  type ShapeProps,
} from '@/components/common/Canvas/shapes/Shape';

import {
  BACKGROUND_INDEX_FONT_FAMILY,
  BACKGROUND_INDEX_FONT_SIZE,
} from '../interfaces/Paper';
import { type ShapeObject, ShapeType } from './ShapeObject';

export interface TextShapeObject extends ShapeObject {
  start: Point;
  text: string;
  style?: TextStyle;
}

interface TextStyle {
  fontSize?: number;
  fontFamily?: string;
}

interface TextShapeProps extends ShapeProps {
  start: Point;
  text: string;
  style: TextStyle;
}

class TextShape extends Shape {
  private start: Point;
  private text: string;
  private style: TextStyle;
  private freeze = false;

  constructor({ id, start, text, style, freeze }: TextShapeProps) {
    super({ id });

    this.start = start;
    this.text = text;
    this.style = style;
    this.freeze = freeze ?? false;
  }

  public draw(context: CanvasRenderingContext2D) {
    context.save();

    const fontSize = this.style.fontSize ?? BACKGROUND_INDEX_FONT_SIZE;
    const fontFamily = this.style.fontFamily ?? BACKGROUND_INDEX_FONT_FAMILY;

    context.font = `${fontSize}px ${fontFamily}`;
    context.fillText(this.text, this.start.x, this.start.y + fontSize);
    context.restore();
  }

  public translate(derivative: Point) {
    return new TextShape({
      id: this.id,
      start: {
        x: this.start.x + derivative.x,
        y: this.start.y + derivative.y,
      },
      text: this.text,
      style: this.style,
    });
  }

  public getBoundingBox() {
    return new DOMRect(0, 0, 0, 0);
  }

  public isPointInShape(point: Point) {
    if (this.freeze) return false;

    // not using this feature in text shape
    console.debug(point);

    return false;
  }

  public isIntersecting(target: Shape) {
    if (this.freeze) return false;

    // not using this feature in text shape
    console.debug(target);

    return false;
  }

  public toObject(): TextShapeObject {
    return {
      _id: this.id,
      type: ShapeType.PATH,
      start: this.start,
      text: this.text,
      style: this.style,
      freeze: this.freeze,
    };
  }
}

export default TextShape;
