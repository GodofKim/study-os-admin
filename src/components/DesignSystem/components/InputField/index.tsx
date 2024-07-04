import { type ForwardedRef, forwardRef, type InputHTMLAttributes } from "react";

import styles from "./index.module.css";
import TextInput from "./type/TextInput";
import { classNames } from "../../utils/classNames";
import DateRangeInput, { type DateRange } from "./type/DateRangeInput";
import DateInput from "./type/DateInput";
import { InputWrapper } from "./InputWrapper";

export interface InputFieldComponent
  extends React.ForwardRefExoticComponent<InputFieldProps> {
  Wrapper: typeof InputWrapper;
}

type InputFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  /** 인풋 상단의 레이블, 접근성 이유로 필수 */
  label: string;
  /** 인풋 상단의 레이블을 시작적으로 숨길지에 대한 여부, 디폴트 값 false */
  hideLabel?: boolean;
  /** 인풋 박스 크기, 디폴트 값 'sm' */
  size?: "sm" | "md";
  /** 인풋 값이 유효한지, 디폴트 값 true */
  isValid?: boolean;
  /** 인풋 하단의 오류시 보여지는 메시지 */
  errorMessage?: string;
  /** 인풋 하단에 도움말 메시지 */
  helperMessage?: string;
  /** Text, Search variants - 인풋 입력 도중 우측 (X) 아이콘을 눌렀을 때의 이벤트 핸들러 */
  onClear?: () => void;
  /** custom data testid */
  "data-component-testid"?: string;

  inputType?: HTMLInputElement["type"];
} & (
    | { type?: "text" }
    | {
        type: "date";
        dateValue: Date | null;
        dateLabel?: string;
        onChangeDateValue?: (value: Date | null) => void;
      }
    | {
        type: "date-range";
        dateRangeValue: DateRange;
        dateRangeLabel?: string;
        onChangeDateRangeValue?: (value: DateRange) => void;
      }
  );

/** 
 * QDS Input Field Component
/* @see https://www.figma.com/file/7vQqPrYW2EFTY4GTvX9Phf/QDS-3.0?type=design&node-id=2969%3A26601&mode=dev&t=84w1oUOYzLqpObpG-1 */
export const InputField: InputFieldComponent = forwardRef(function InputField(
  props: InputFieldProps,
  forwardedRef: ForwardedRef<HTMLInputElement>
) {
  const {
    type = "text",
    size = "sm",
    label,
    hideLabel = false,
    isValid = true,
    errorMessage,
    helperMessage,
    onClear,
    className,
    "data-component-testid": dataComponentTestId,
    style,
    inputType,
    ...inputProps
  } = props;
  const { disabled, readOnly, required } = inputProps;

  return (
    <InputWrapper
      hideLabel={hideLabel}
      label={label}
      required={required}
      errorMessage={errorMessage}
      helperMessage={helperMessage}
      dataComponentTestId={dataComponentTestId}
      className={className}
      style={style}
    >
      {/* --- 박스 영역 --- */}
      <div
        className={classNames(
          styles.inputBox,
          size === "md" ? styles.inputBoxMd : styles.inputBoxSm,
          disabled ? styles.inputBoxDisabled : undefined,
          readOnly ? styles.inputBoxReadOnly : undefined,
          !isValid ? styles.inputBoxErrored : undefined
        )}
      >
        {/* --- 인풋 영역 --- */}
        {type === "text" && (
          <TextInput
            onClear={onClear}
            size={size}
            inputType={inputType}
            {...inputProps}
            ref={forwardedRef}
          />
        )}
        {props.type === "date" && (
          <DateInput
            dateValue={props.dateValue}
            onChangeDateValue={props.onChangeDateValue}
            dateLabel={props.dateLabel}
            size={size}
            {...inputProps}
            ref={forwardedRef}
          />
        )}
        {props.type === "date-range" && (
          <DateRangeInput
            dateRangeValue={props.dateRangeValue}
            onChangeDateRangeValue={props.onChangeDateRangeValue}
            dateRangeLabel={props.dateRangeLabel}
            size={size}
            {...inputProps}
            ref={forwardedRef}
          />
        )}
      </div>
    </InputWrapper>
  );
}) as InputFieldComponent;

export type DateRangeValue = DateRange;

InputField.Wrapper = InputWrapper;
