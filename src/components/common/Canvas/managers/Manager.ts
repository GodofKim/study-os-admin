export abstract class Manager {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor() {
    this.canvas = document.createElement('canvas');
    const canvasContext = this.canvas.getContext('2d');
    if (!canvasContext) {
      throw new Error('canvas context is null');
    }

    this.context = canvasContext;
  }

  public clear() {
    this.context.save();
    this.context.resetTransform();
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.restore();
  }

  abstract redraw(): void;
}
