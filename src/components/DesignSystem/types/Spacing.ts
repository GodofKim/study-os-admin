import { CSSProperties } from "react";

export type Margin = number;
export type Padding = number;

export interface SpacingProps {
  p?: Padding;
  pt?: Padding;
  pr?: Padding;
  pb?: Padding;
  pl?: Padding;
  px?: Padding;
  py?: Padding;

  m?: Margin;
  mt?: Margin;
  mr?: Margin;
  mb?: Margin;
  ml?: Margin;
  mx?: Margin;
  my?: Margin;
}

export const convertSpacing = ({
  p,
  pb,
  pl,
  pr,
  pt,
  px,
  py,
  m,
  mb,
  ml,
  mr,
  mt,
  mx,
  my,
}: SpacingProps): Partial<CSSProperties> => {
  return {
    padding: p,
    paddingBottom: pb ?? py ?? p,
    paddingLeft: pl ?? px ?? p,
    paddingRight: pr ?? px ?? p,
    paddingTop: pt ?? py ?? p,
    margin: m,
    marginBottom: mb ?? my ?? m,
    marginLeft: ml ?? mx ?? m,
    marginRight: mr ?? mx ?? m,
    marginTop: mt ?? my ?? m,
  };
};
