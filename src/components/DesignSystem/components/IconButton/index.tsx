import { ButtonHTMLAttributes, forwardRef } from "react";
import styles from "./index.module.css";
import { classNames } from "../../utils/classNames";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "S" | "M";
  disabled?: boolean;
  selected?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { children, className, size, disabled = false, selected = false, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={classNames(
          styles.wrapper,
          styles[size],
          disabled ? styles.disabled : undefined,
          selected ? styles.selected : undefined,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
