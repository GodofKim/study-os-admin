import { PropsWithChildren } from "react";
import { classNames } from "../../../utils/classNames";
import styles from "./index.module.css";

export type ListProps = {
  size?: "Small" | "Medium";
  type?: "Fixed" | "Scrollable";
};

export const List = ({
  size = "Small",
  type = "Fixed",
  children,
}: PropsWithChildren<ListProps>) => {
  return (
    <div className={styles.scrollWrapper}>
      <div className={classNames(styles.tabsList, styles[size], styles[type])}>
        {children}
      </div>
    </div>
  );
};
