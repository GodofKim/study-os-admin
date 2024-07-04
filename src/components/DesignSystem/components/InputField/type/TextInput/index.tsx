import {
  forwardRef,
  type InputHTMLAttributes,
  type MouseEventHandler,
  useRef,
} from "react";

import styles from "./index.module.css";
import { classNames } from "../../../../utils/classNames";

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size: "sm" | "md";
  inputType?: HTMLInputElement["type"];
  onClear?: () => void;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(props, forwardedRef) {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const { onClear, size, inputType, ...inputProps } = props;
    const { disabled, readOnly, value } = inputProps;

    const showClearButton = !!value && !disabled && !readOnly && onClear;

    const handleClear: MouseEventHandler<HTMLSpanElement> = () => {
      if (!forwardedRef && inputRef?.current) {
        inputRef.current.focus();
      }

      onClear?.();
    };

    return (
      <div
        className={classNames(
          styles.wrapper,
          showClearButton ? styles.wrapperWithAside : undefined
        )}
      >
        <input
          ref={forwardedRef ?? inputRef}
          type={inputType ?? "text"}
          {...inputProps}
          className={classNames(
            styles.textInput,
            size === "md" ? styles.textInputMd : styles.textInputSm
          )}
        />
        {showClearButton && (
          <div className={styles.aside}>
            <button className={styles.inputClearButton} onClick={handleClear}>
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM5.20921 5.20921C5.48816 4.93026 5.94042 4.93026 6.21936 5.20921L10 8.98985L13.7806 5.20921C14.0596 4.93026 14.5118 4.93026 14.7908 5.20921C15.0697 5.48815 15.0697 5.94042 14.7908 6.21936L11.0102 10L14.7908 13.7806C15.0697 14.0596 15.0697 14.5118 14.7908 14.7908C14.5118 15.0697 14.0596 15.0697 13.7806 14.7908L10 11.0102L6.21936 14.7908C5.94042 15.0697 5.48816 15.0697 5.20921 14.7908C4.93026 14.5118 4.93026 14.0596 5.20921 13.7806L8.98985 10L5.20921 6.21936C4.93026 5.94042 4.93026 5.48816 5.20921 5.20921Z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    );
  }
);

export default TextInput;
