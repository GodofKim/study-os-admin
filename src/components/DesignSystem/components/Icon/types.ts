import { ForwardRefExoticComponent, ReactSVG, SVGProps } from "react";

export type Tuple = [
  elementName: keyof ReactSVG,
  attrs: Record<string, string>,
  children?: IconNode[]
];

export type IconNode = Tuple[];

export type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;

export interface IconProps
  extends Partial<Omit<React.SVGProps<SVGSVGElement>, "stroke">> {
  size?: string | number;
  stroke?: string | number;
}

export type Icon = ForwardRefExoticComponent<IconProps>;
