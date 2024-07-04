import type { ReactElement } from "react";

export interface WithChildren {
  children?: React.ReactNode;
}

export interface WithClassName {
  className?: string;
}

export interface WithDataTestID {
  dataTestID?: string;
}

export interface WithStyle {
  style?: React.CSSProperties;
}

export enum IconSize {
  xxs = 12,
  xs = 16,
  s = 20,
  m = 24,
  l = 32,
  xl = 40,
}

export interface SVGProps extends WithChildren, WithClassName, WithStyle {
  size?: IconSize;
  onClick?(): void;
}

export default function Icon({ children, size, ...props }: SVGProps) {
  return (
    <svg
      fill="none"
      height={size}
      style={{ flexShrink: 0 }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}

export type Iconable = ReactElement<SVGProps>;
