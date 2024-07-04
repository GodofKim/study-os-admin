import { forwardRef, HTMLAttributes, MouseEvent, useRef } from "react";
import { classNames } from "../../utils/classNames";
import styles from "./index.module.css";
import { Text } from "../Text";
import { IconCheck } from "../../main";

export interface CheckboxProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  size?: "M" | "S";
  label?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { size = "M", label, checked, onChange, disabled, className, ...props },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = (e: MouseEvent<HTMLDivElement | HTMLInputElement>) => {
      if (e.target instanceof HTMLInputElement) {
        return;
      }

      if (inputRef.current) {
        inputRef.current.click();
      }
    };

    return (
      <div
        ref={ref}
        className={classNames(
          styles.wrapper,
          !label ? styles.wrapperCircle : undefined,
          disabled ? styles.wrapperDisabled : undefined,
          className
        )}
        onClick={handleClick}
        {...props}
      >
        <div
          className={classNames(
            styles.container,
            size === "M" ? styles.md : styles.sm,
            disabled ? styles.inputDisabled : undefined
          )}
        >
          <input
            ref={inputRef}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
            className={classNames(styles.input)}
            tabIndex={disabled ? -1 : 0}
          />
          <span
            className={classNames(
              styles.checkmark,
              checked ? styles.checkmarkChecked : undefined,
              size === "M" ? styles.md : styles.sm
            )}
          >
            {checked && <IconCheck color="#ffffff" />}
          </span>
        </div>
        {label && (
          <label className={classNames(styles.label)}>
            <Text
              size={size === "M" ? "body" : "subheadline"}
              className={disabled ? styles.labelDisabled : undefined}
            >
              {label}
            </Text>
          </label>
        )}
      </div>
    );
  }
);
