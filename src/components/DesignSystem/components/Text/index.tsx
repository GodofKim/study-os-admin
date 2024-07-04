import { forwardRef } from "react";
import { classNames } from "../../utils/classNames";
import styles from "./index.module.css";
import { Typography, typography } from "../../types/Typography";
import { Color } from "../../types/Color";
import { SpacingProps, convertSpacing } from "../../types/Spacing";

export interface TextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    SpacingProps {
  size?: Typography;
  color?: Color;
}

export const Text = forwardRef<HTMLDivElement, TextProps>(
  ({ children, size = "body", color, style, className, ...props }, ref) => {
    const font = typography.find((item) => item.key === size);

    const { size: fontSize, lineHeight, weight } = font || typography[0];

    const spacing = convertSpacing(props);

    return (
      <div
        ref={ref}
        style={{
          fontSize: `${fontSize}px`,
          lineHeight: `${lineHeight}px`,
          fontWeight: weight,
          ...spacing,
          ...(color ? { color: `var(${color})` } : {}),
          ...style,
        }}
        className={classNames("qds3__text", styles.wrapper, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
