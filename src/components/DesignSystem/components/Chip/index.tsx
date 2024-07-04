import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "../../utils/classNames";

import styles from "./index.module.css";
import { IconX } from "../../main";

type Props = {
  label: string;
  size?: "S" | "M";
  icon?: ReactNode;
  isSelected?: boolean;
  onDelete?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Chip = ({
  label,
  size = "M",
  icon,
  isSelected,
  disabled,
  onClick,
  onDelete,
  ...restProps
}: Props) => {
  const isClickable = onClick && !disabled;

  return (
    <button
      {...restProps}
      disabled={disabled}
      onClick={isClickable ? onClick : undefined}
      className={classNames(
        styles.chipWrapper,
        styles[size],
        isSelected ? styles.selected : undefined,
        disabled ? styles.disabled : undefined,
        restProps.className
      )}
    >
      <div className={styles.chipBody}>
        {icon && <div className={styles.chipIcon}>{icon}</div>}
        <div className={styles[`chipLabel${size}`]}>{label}</div>
      </div>
      {onDelete && (
        <button
          onClick={onDelete}
          className={styles.closeButton}
          tabIndex={disabled ? -1 : 0}
        >
          <IconX size={16} />
        </button>
      )}
    </button>
  );
};
