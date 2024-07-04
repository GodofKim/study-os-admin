import { AlignItems } from "../../types/AlignItems";
import { JustifyContent } from "../../types/JustifyContent";
import { SpacingProps, convertSpacing } from "../../types/Spacing";
import { classNames } from "../../utils/classNames";
import styles from "./index.module.css";

export interface GroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    SpacingProps {
  gap?: number;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
}

export const Group = ({
  children,
  style,
  className,
  gap,
  justifyContent,
  alignItems,
  ...props
}: GroupProps) => {
  const spacing = convertSpacing(props);
  return (
    <div
      className={classNames(styles.wrapper, className)}
      style={{ ...spacing, ...style, gap, justifyContent, alignItems }}
      {...props}
    >
      {children}
    </div>
  );
};
