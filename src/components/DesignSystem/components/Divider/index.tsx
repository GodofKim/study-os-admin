import { HTMLAttributes } from "react";
import { convertSpacing, SpacingProps } from "../../types/Spacing";
import { classNames } from "../../utils/classNames";
import styles from "./index.module.css";

export interface DividerProps
  extends HTMLAttributes<HTMLDivElement>,
    SpacingProps {
  size?: "1" | "4" | "12";
}

export const Divider = ({ size = "4", ...props }: DividerProps) => {
  const spacing = convertSpacing(props);

  return (
    <div
      style={{
        ...spacing,
      }}
      className={classNames(styles.wrapper, styles[`size${size}`])}
      {...props}
    ></div>
  );
};
