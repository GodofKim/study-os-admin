import {
  BACKGROUND_INDEX_FONT_FAMILY,
  BACKGROUND_INDEX_FONT_SIZE,
  BACKGROUND_INDEX_OFFSET_X,
  BACKGROUND_INDEX_OFFSET_Y,
} from '@/components/common/Canvas/interfaces/Paper';
import { Manager } from '@/components/common/Canvas/managers/Manager';
import ImageShape from '@/components/common/Canvas/shapes/ImageShape';
import RectangleShape from '@/components/common/Canvas/shapes/RectangleShape';
import Shape from '@/components/common/Canvas/shapes/Shape';
import TextShape from '@/components/common/Canvas/shapes/TextShape';

class BackgroundManager extends Manager {
  private shapes: Shape[];

  constructor() {
    super();
    this.shapes = [];
  }

  public setBackground({ color, image, paper, index }: Background) {
    this.shapes = [];

    if (color) {
      const paperShape = new RectangleShape({
        start: { x: 0, y: 0 },
        width: paper.width,
        height: paper.height,
        style: { fillColor: color },
      });

      this.shapes.push(paperShape);
    }

    if (index) {
      const textShape = new TextShape({
        text: index,
        start: {
          x: BACKGROUND_INDEX_OFFSET_X,
          y: BACKGROUND_INDEX_OFFSET_Y,
        },
        style: {
          fontSize: BACKGROUND_INDEX_FONT_SIZE,
          fontFamily: BACKGROUND_INDEX_FONT_FAMILY,
        },
      });

      this.shapes.push(textShape);
    }

    if (image) {
      const offsetX = image.offsetX;
      const offsetY =
        image.offsetY +
        (index ? BACKGROUND_INDEX_OFFSET_Y + BACKGROUND_INDEX_FONT_SIZE : 0);

      const imageShape = new ImageShape({
        start: {
          x: offsetX,
          y: offsetY,
        },
        width: image.width,
        height: image.height,
        freeze: true,
        image: image.source,
        style: { composite: 'source-over' },
      });

      this.shapes.push(imageShape);
    }

    this.redraw();
  }

  public redraw() {
    this.clear();

    this.shapes.forEach((shape) => {
      shape.draw(this.context);
    });
  }
}

export interface Background {
  paper: {
    width: number;
    height: number;
  };
  color?: string;
  image?: {
    offsetX: number;
    offsetY: number;
    width: number;
    height: number;
    source: HTMLImageElement;
  };
  index?: string;
}

export default BackgroundManager;
