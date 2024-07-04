import { HTMLAttributes } from "react";
import { classNames } from "../../utils/classNames";
import styles from "./index.module.css";
import { Text } from "../Text";

export interface ToggleSwitchProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  isLabelLeft?: boolean;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  size?: "L" | "M" | "S";
  disabled?: boolean;
}

export const ToggleSwitch = ({
  label,
  isLabelLeft,
  checked,
  onChange,
  size = "M",
  disabled,
  ...props
}: ToggleSwitchProps) => {
  return (
    <div
      className={classNames(
        styles.wrapper,
        isLabelLeft ? styles.wrapperReversed : undefined,
        styles[size],
        disabled ? styles.disabled : undefined
      )}
    >
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          tabIndex={disabled ? -1 : 0}
          {...props}
        />
        <span className={classNames(styles.slider, styles.round)} />
      </label>
      <div>
        <Text size={size === "S" ? "subheadline" : "body"}>{label}</Text>
      </div>
    </div>
  );
};
