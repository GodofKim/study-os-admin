import { ButtonHTMLAttributes, ComponentProps, forwardRef } from "react";
import styles from "./index.module.css";
import { classNames } from "../../utils/classNames";
import { Spinner } from "../Spinner";
import { Text } from "../Text";

export interface TextButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  size: "L" | "M" | "S" | "XS";
  isLoading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
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
          <Spinner size={20} color="dark" />
        ) : (
          <div className={styles.buttonContent}>
            {icon ? <span className={styles.icon}>{icon}</span> : null}
            <Text size={MAP_SIZE_TO_TEXT_SIZE[size]}>{children}</Text>
          </div>
        )}
      </button>
    );
  }
);

const MAP_SIZE_TO_TEXT_SIZE: Record<
  TextButtonProps["size"],
  ComponentProps<typeof Text>["size"]
> = {
  L: "body-strong",
  M: "body-strong",
  S: "subheadline-strong",
  XS: "subheadline-strong",
};
