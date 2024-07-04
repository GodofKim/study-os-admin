import { HTMLAttributes, PropsWithChildren, useContext } from "react";
import { TabsContext } from "../TabsContext";

export type PanelProps = {
  value: string;
} & HTMLAttributes<HTMLDivElement>;

export const Panel = ({
  value,
  children,
  ...restProps
}: PropsWithChildren<PanelProps>) => {
  const { value: activeTabValue } = useContext(TabsContext) ?? {};

  const isActive = activeTabValue === value;

  if (!isActive) return null;

  return <div {...restProps}>{children}</div>;
};
