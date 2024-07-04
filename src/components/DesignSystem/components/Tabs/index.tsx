import { HTMLAttributes, PropsWithChildren } from "react";

import { Tab } from "./Tab";

import { TabsProvider } from "./TabsContext";
import { List } from "./List";
import { Panel } from "./Panel";

import styles from "./index.module.css";

type TabsProps = {
  value?: string;
  onChangeValue?: (value: string) => void;
  defaultValue?: string;
  withIndicator?: boolean;
} & HTMLAttributes<HTMLDivElement>;

/**
 * for controlled state use : value, onChangeValue props
 *
 * for uncontrolled state use : defaultValue prop
 */
export const Tabs = ({
  value,
  onChangeValue,
  defaultValue,
  withIndicator = true,
  children,
  ...restProps
}: PropsWithChildren<TabsProps>) => {
  return (
    <TabsProvider
      withIndicator={withIndicator}
      value={value}
      onChangeValue={onChangeValue}
      defaultValue={defaultValue}
    >
      <div className={styles.tabsWrapper} {...restProps}>
        {children}
      </div>
    </TabsProvider>
  );
};

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panel = Panel;
