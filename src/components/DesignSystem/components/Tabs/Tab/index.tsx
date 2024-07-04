import { ReactNode, useContext } from "react";

import styles from "./index.module.css";
import { classNames } from "../../../utils/classNames";
import { TabsContext } from "../TabsContext";

export type TabProps = {
  value: string;
  label?: string;
  /** icon 디자인 가이드 - 아이콘만 쓸 때는 24px, 레이블과 같이 쓸 때는 16px 사용해주세요 */
  icon?: ReactNode;
  enabled?: boolean;
};

export const Tab = ({
  value,
  label,
  icon,
  enabled = true,
  ...restProps
}: TabProps) => {
  const {
    value: activeTabValue,
    updateValue,
    withIndicator = true,
  } = useContext(TabsContext) ?? {};

  const isActive = activeTabValue === value;

  return (
    <button
      role="tab"
      className={classNames(
        styles.tab,
        withIndicator ? styles.withIndicator : styles.withoutIndicator,
        isActive ? styles.activeTab : undefined
      )}
      onClick={() => updateValue?.(value)}
      disabled={!enabled}
      data-isactive={isActive}
      {...restProps}
    >
      <div className={styles.tabContent}>
        {icon && (
          <div
            className={classNames(
              styles.icon,
              icon && !label ? styles.iconOnly : undefined
            )}
          >
            {icon}
          </div>
        )}
        {label && <div className={styles.label}>{label}</div>}
        {withIndicator && isActive && (
          <div className={styles.activeIndicator} />
        )}
      </div>
    </button>
  );
};
