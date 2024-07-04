import { ButtonHTMLAttributes, forwardRef } from "react";
import styles from "./index.module.css";
import { classNames } from "../../utils/classNames";
import { Spinner } from "../Spinner";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary" | "negative";
  size: "L" | "M" | "S" | "XS";
  isLoading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "L",
      isLoading,
      disabled = false,
      icon,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={classNames(
          styles.wrapper,
          styles[variant],
          styles[size],
          isLoading ? styles.isLoading : undefined,
          disabled ? styles.disabled : undefined,
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Spinner size={20} />
        ) : (
          <>
            {icon ? <span className={styles.icon}>{icon}</span> : null}
            {children}
          </>
        )}
      </button>
    );
  }
);
