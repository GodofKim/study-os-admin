import { type Point } from '@/components/common/Canvas/interfaces/Point';
import Shape, {
  type ShapeProps,
} from '@/components/common/Canvas/shapes/Shape';

import { type ShapeObject, ShapeType } from './ShapeObject';

export interface ImageShapeObject extends ShapeObject {
  start: Point;
  width: number;
  height: number;
  image: string;
  style?: ImageStyle;
}

interface ImageStyle {
  composite?: GlobalCompositeOperation;
}

interface ImageShapeProps extends ShapeProps {
  start: Point;
  width: number;
  height: number;
  image: HTMLImageElement;
  style?: ImageStyle;
}

class ImageShape extends Shape {
  private start: Point;
  private width: number;
  private height: number;
  private image: HTMLImageElement;
  private style: ImageStyle;
  private freeze = false;

  constructor({
    id,
    start,
    width,
    height,
    image,
    style,
    freeze,
  }: ImageShapeProps) {
    super({ id });

    this.start = start;
    this.width = width;
    this.height = height;
    this.image = image;
    this.style = style ?? {};
    this.freeze = freeze ?? false;
  }

  private _draw(context: CanvasRenderingContext2D): void {
    context.save();

    /** Style */
    // since image has to be loaded asynchronously, image composite has to be destination-over
    // that means, image will be drawn behind the existing shapes by default
    context.globalCompositeOperation =
      this.style.composite ?? 'destination-over';

    /** Paint */
    context.drawImage(
      this.image,
      this.start.x,
      this.start.y,
      this.width,
      this.height,
    );

    context.restore();
  }

  public draw(context: CanvasRenderingContext2D): void {
    if (!this.image.complete) {
      this.image.onload = () => this._draw(context);
      return;
    }

    this._draw(context);
  }

  public translate(derivative: Point): Shape {
    const translatedStart = {
      x: this.start.x + derivative.x,
      y: this.start.y + derivative.y,
    };

    return new ImageShape({
      id: this.id,
      start: translatedStart,
      width: this.width,
      height: this.height,
      image: this.image,
      freeze: this.freeze,
      style: this.style,
    });
  }

  public getBoundingBox(): DOMRect {
    return new DOMRect(
      this.start.x,
      this.start.y,
      this.start.x + this.width,
      this.start.y + this.height,
    );
  }

  public isPointInShape(point: Point): boolean {
    if (this.freeze) return false;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;

    this.draw(context);

    return context.isPointInStroke(point.x, point.y);
  }

  public isIntersecting(target: Shape): boolean {
    if (this.freeze) return false;

    // 1. Bounding box 비교
    const currentBoundingBox = this.getBoundingBox();
    const targetBoundingBox = target.getBoundingBox();

    if (
      currentBoundingBox.left > targetBoundingBox.right ||
      currentBoundingBox.right < targetBoundingBox.left ||
      currentBoundingBox.top > targetBoundingBox.bottom ||
      currentBoundingBox.bottom < targetBoundingBox.top
    ) {
      return false;
    }

    return true;
  }

  /**
   * @description image shape is currently not in use in paintManager
   *              only for background manager which is not exported
   */
  public toObject(): ImageShapeObject {
    return {
      _id: this.id,
      type: ShapeType.IMAGE,
      start: this.start,
      width: this.width,
      height: this.height,
      image: this.image.src,
      freeze: this.freeze,
    };
  }
}

export default ImageShape;
