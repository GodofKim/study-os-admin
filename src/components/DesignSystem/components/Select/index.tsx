import { CSSProperties, useState } from "react";
import { classNames } from "../../utils/classNames";
import styles from "./index.module.css";
import { InputField } from "../InputField";
import { IconChevronDown, Text } from "../../main";
import { useClickOutside } from "@mantine/hooks";

interface Option {
  value: string;
  label: string;
}

interface Props {
  label: string;
  hideLabel?: boolean;
  options: Option[];
  value: string | null;
  onChange: (value: string) => void;
  placeholder?: string;

  disabled?: boolean;
  readOnly?: boolean;
  isValid?: boolean;
  style?: CSSProperties;

  className?: string;
  dataComponentTestId?: string;
  errorMessage?: string;
  helperMessage?: string;
  required?: boolean;
}

export const Select = ({
  label,
  hideLabel = false,
  options,
  value,
  onChange,
  placeholder,
  disabled,
  readOnly,
  isValid = true,
  style,

  className,
  dataComponentTestId,
  errorMessage,
  helperMessage,
  required,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(value);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );

  const ref = useClickOutside(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <div className={styles.wrapper} style={style}>
      <InputField.Wrapper
        label={label}
        hideLabel={hideLabel}
        className={className}
        dataComponentTestId={dataComponentTestId}
        errorMessage={errorMessage}
        helperMessage={helperMessage}
        required={required}
      >
        <div
          className={classNames(
            styles.inputBox,
            styles.inputBoxSm,
            disabled ? styles.inputBoxDisabled : undefined,
            readOnly ? styles.inputBoxReadOnly : undefined,
            !isValid ? styles.inputBoxErrored : undefined
          )}
          onClick={() => setIsOpen(true)}
        >
          <Text size="subheadline">
            {selectedOption
              ? selectedOption.label
              : placeholder || "Select an option"}
          </Text>
          <div className={styles.icon}>
            <IconChevronDown size={24} />
          </div>
        </div>
      </InputField.Wrapper>
      {isOpen && (
        <div ref={ref} className={styles.popover}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.option}
              onClick={() => {
                setSelectedValue(option.value);
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              <Text size="subheadline">{option.label}</Text>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
