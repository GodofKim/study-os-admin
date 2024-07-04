import type { CircleShapeObject } from '@/components/common/Canvas/shapes/CircleShape';
import CircleShape from '@/components/common/Canvas/shapes/CircleShape';
import CurveShape, {
  type CurveShapeObject,
} from '@/components/common/Canvas/shapes/CurveShape';
import ImageShape, {
  type ImageShapeObject,
} from '@/components/common/Canvas/shapes/ImageShape';
import PathShape, {
  type PathShapeObject,
} from '@/components/common/Canvas/shapes/PathShape';
import RectangleShape, {
  type RectangleShapeObject,
} from '@/components/common/Canvas/shapes/RectangleShape';
import type Shape from '@/components/common/Canvas/shapes/Shape';
import {
  type ShapeObject,
  ShapeType,
} from '@/components/common/Canvas/shapes/ShapeObject';

export class ShapeFactory {
  static generateShape(shapeObject: ShapeObject): Shape {
    switch (shapeObject.type) {
      case ShapeType.CIRCLE: {
        const circleShapeObject = shapeObject as CircleShapeObject;
        return new CircleShape({
          id: circleShapeObject._id,
          center: circleShapeObject.center,
          radius: circleShapeObject.radius,
          style: circleShapeObject.style,
        });
      }
      case ShapeType.CURVE: {
        const curveShapeObject = shapeObject as CurveShapeObject;
        return new CurveShape({
          id: curveShapeObject._id,
          curves: curveShapeObject.curves,
          style: curveShapeObject.style,
          closed: curveShapeObject.closed,
        });
      }
      case ShapeType.PATH: {
        const pathShapeObject = shapeObject as PathShapeObject;
        return new PathShape({
          id: pathShapeObject._id,
          points: pathShapeObject.points,
          style: pathShapeObject.style,
          closed: pathShapeObject.closed,
        });
      }
      case ShapeType.RECTANGLE: {
        const rectangleShapeObject = shapeObject as RectangleShapeObject;
        return new RectangleShape({
          id: rectangleShapeObject._id,
          start: rectangleShapeObject.start,
          width: rectangleShapeObject.width,
          height: rectangleShapeObject.height,
          style: rectangleShapeObject.style,
        });
      }
      case ShapeType.IMAGE:
        const imageShapeObject = shapeObject as ImageShapeObject;
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.src = imageShapeObject.image;
        return new ImageShape({
          id: imageShapeObject._id,
          start: imageShapeObject.start,
          width: imageShapeObject.width,
          height: imageShapeObject.height,
          freeze: imageShapeObject.freeze,
          image,
          style: imageShapeObject.style,
        });
      /**
       * TextShape Serialization is not supported for now
       * since they are not used in paint manager
       * only used in background manager
       */
      case ShapeType.TEXT:
        throw new Error('Not supported Serializing TextShape');

      default:
        throw new Error(`Unsupported shape type: ${shapeObject.type}`);
    }
  }
}
