export interface Paper {
  margin?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  width: number;
  height: number;
}

/**
 * Virtual Page Size
 *
 * this is the size of the virtual page where all the points & lines are drawn
 * based on this size, we can scale the canvas to fit the device screen
 *
 * for example, if the virtual page size is 750x1060, and the device screen size is 375x530,
 * we can scale the canvas to 0.5x0.5 to fit the device screen
 *
 */
export const PAPER_WIDTH = 750;
export const PAPER_HEIGHT = 1060;

/**
 * Device Scale Policy
 *
 * this is the policy to scale the canvas to fit the device screen.
 */
export const MAX_LANDSCAPE_WIDTH_RATIO = 0.75;
export const MAX_PORTRAIT_WIDTH_RATIO = 1.0;

/**
 * Background Image Policy
 *
 * this is the policy to render the background image.
 * by default, the background image is rendered with the size of 312 (width)
 * and the position of (40, 60) (x, y)
 *
 * this size is applied to PAPER (virtual page) size.
 */
export const BACKGROUND_IMAGE_OFFSET_X = 20;
export const BACKGROUND_IMAGE_OFFSET_Y = 16;
export const BACKGROUND_IMAGE_WIDTH = 312;
export const BACKGROUND_COLOR = '#ffffff';

/**
 * Background Problem Index Policy
 */
export const BACKGROUND_INDEX_OFFSET_X = 20;
export const BACKGROUND_INDEX_OFFSET_Y = 20;
export const BACKGROUND_INDEX_FONT_SIZE = 16;
export const BACKGROUND_INDEX_FONT_FAMILY =
  "'Pretendard Std Variable', 'Pretendard JP Variable','Pretendard Variable', 'system-ui'";
