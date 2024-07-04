import { ButtonHTMLAttributes, forwardRef } from "react";
import styles from "./index.module.css";
import { classNames } from "../../utils/classNames";

export interface InlineButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  size: "M" | "S";
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const InlineButton = forwardRef<HTMLButtonElement, InlineButtonProps>(
  (
    { children, variant, size, disabled = false, icon, className, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={classNames(
          styles.wrapper,
          styles[variant],
          styles[size],
          disabled ? styles.disabled : undefined,
          className
        )}
        {...props}
      >
        {children}
        {icon ? (
          <span
            style={{
              marginLeft: 4,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {icon}
          </span>
        ) : null}
      </button>
    );
  }
);
