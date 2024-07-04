export enum CanvasTool {
  PEN = "PEN",
  HIGHLIGHTER = "HIGHLIGHTER",
  ERASER = "ERASER",
  LASSO = "LASSO",
}

export enum ToolWeight {
  LIGHT = "LIGHT",
  MEDIUM = "MEDIUM",
  BOLD = "BOLD",
}

export enum PenColor {
  BLACK = "BLACK",
  YELLOW = "YELLOW",
  RED = "RED",
}

export enum HighlighterColor {
  GREEN = "GREEN",
  YELLOW = "YELLOW",
  PINK = "PINK",
}

export type Pixel = `${number}px`;

export type HexColor = `#${string}`;
