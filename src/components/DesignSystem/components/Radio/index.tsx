import { forwardRef } from "react";
import { classNames } from "../../utils/classNames";
import styles from "./index.module.css";
import { Text } from "../Text";

export interface RadioProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  value?: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  size?: "M" | "S";
  disabled?: boolean;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      value,
      checked,
      onChange,
      size = "M",
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <label
        className={classNames(
          styles.wrapper,
          label ? undefined : styles.wrapperNoLabel,
          disabled ? styles.disabled : undefined,
          className
        )}
      >
        <div
          className={classNames(
            styles.inputWrapper,
            size === "M" ? styles.inputWrapperMd : styles.inputWrapperSm
          )}
        >
          <input
            ref={ref}
            type="radio"
            value={value}
            checked={checked}
            onChange={(e) => onChange?.(e.target.value)}
            className={classNames(
              styles.input,
              size === "M" ? styles.inputMd : styles.inputSm,
              disabled ? styles.inputDisabled : undefined
            )}
            tabIndex={disabled ? -1 : 0}
            {...props}
          />
        </div>
        {label && (
          <span className={styles.label}>
            <Text
              size={size === "M" ? "body" : "subheadline"}
              className={disabled ? styles.labelDisabled : undefined}
            >
              {label}
            </Text>
          </span>
        )}
      </label>
    );
  }
);
