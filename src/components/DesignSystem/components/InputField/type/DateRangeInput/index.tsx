import { forwardRef, type InputHTMLAttributes, useRef, useState } from "react";

import styles from "./index.module.css";
import { classNames } from "../../../../utils/classNames";
import { IconCalendar } from "../../../../main";
import { RangeCalendar } from "../../../Calendar/RangeCalendar";

export type DateRange = {
  start: Date | null;
  end: Date | null;
};

export interface DateRangeInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size: "sm" | "md";
  dateRangeValue: DateRange;
  dateRangeLabel?: string;
  onChangeDateRangeValue?: (value: DateRange) => void;
}

const DateRangeInput = forwardRef<HTMLInputElement, DateRangeInputProps>(
  function TextInput(props, forwardedRef) {
    const {
      size,
      dateRangeValue,
      dateRangeLabel,
      onChangeDateRangeValue,
      ...restProps
    } = props;
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
            dateRangeLabel ||
            [dateRangeValue.start, dateRangeValue.end]
              .filter((value): value is Date => !!value)
              .map(
                (value) =>
                  `${value.getFullYear()}년 ${
                    value.getMonth() + 1
                  }월 ${value.getDate()}일`
              )
              .join(" ~ ") ||
            ""
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
              <RangeCalendar
                dateRangeValue={dateRangeValue}
                onChangeDateRangeValue={onChangeDateRangeValue}
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

export default DateRangeInput;
