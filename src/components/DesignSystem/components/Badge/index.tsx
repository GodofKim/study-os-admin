import { HTMLAttributes } from "react";
import { convertSpacing, SpacingProps } from "../../types/Spacing";
import styles from "./index.module.css";
import { classNames } from "../../utils/classNames";
import { Text } from "../Text";

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    SpacingProps {
  size?: "M" | "S" | "XS";
}

export const Badge = ({ children, size = "M", ...props }: BadgeProps) => {
  const spacing = convertSpacing(props);

  return (
    <div
      style={{
        ...spacing,
      }}
      className={classNames(styles.wrapper, styles[size])}
      {...props}
    >
      {children && (
        <Text size="caption-2" color="--Neutral-Colors-Neutral-100" mx={4}>
          {children}
        </Text>
      )}
    </div>
  );
};
