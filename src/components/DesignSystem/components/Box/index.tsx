import { SpacingProps, convertSpacing } from "../../types/Spacing";

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    SpacingProps {}

export const Box = ({ children, style, ...props }: BoxProps) => {
  const spacing = convertSpacing(props);
  return (
    <div style={{ ...spacing, ...style }} {...props}>
      {children}
    </div>
  );
};
