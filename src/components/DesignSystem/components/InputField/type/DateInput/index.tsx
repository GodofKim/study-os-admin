import { forwardRef, type InputHTMLAttributes, useRef, useState } from "react";

import styles from "./index.module.css";
import { classNames } from "../../../../utils/classNames";
import { IconCalendar } from "../../../../main";
import { DateCalendar } from "../../../Calendar/DateCalendar";

export interface DateInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size: "sm" | "md";
  dateValue: Date | null;
  dateLabel?: string;
  onChangeDateValue?: (value: Date | null) => void;
}

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  function TextInput(props, forwardedRef) {
    const { size, dateValue, dateLabel, onChangeDateValue, ...restProps } =
      props;
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [isOpen, setIsOpen] = useState(false);

    return (
      <div
        className={classNames(
          styles.wrapper,
          props.disabled ? styles.wrapperDisabled : undefined
        )}
      >
        <IconCalendar
          size={size === "md" ? 24 : 20}
          className={styles.calendarIcon}
        />

        <input
          ref={forwardedRef ?? inputRef}
          {...restProps}
          className={classNames(
            styles.dateRangeInput,
            size === "md" ? styles.dateRangeInputMd : styles.dateRangeInputSm
          )}
          onClick={() => setIsOpen(true)}
          value={
            dateLabel ??
            (dateValue
              ? `${dateValue.getFullYear()}년 ${
                  dateValue.getMonth() + 1
                }월 ${dateValue.getDate()}일`
              : "")
          }
          readOnly
        />
        {isOpen && (
          <>
            <div
              className={classNames(
                styles.calendarBox,
                size === "md" ? styles.calendarBoxMd : styles.calendarBoxSm
              )}
            >
              <DateCalendar
                dateValue={dateValue}
                onChangeDateValue={onChangeDateValue}
              />
            </div>
            <div
              className={styles.overlay}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
              }}
            />
          </>
        )}
      </div>
    );
  }
);

export default DateInput;
