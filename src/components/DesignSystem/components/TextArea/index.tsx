import { TextareaHTMLAttributes, useRef } from "react";

import styles from "./index.module.css";
import { classNames } from "../../utils/classNames";
import { Text } from "../Text";
import { IconExclaminationCircleFill } from "../../main";
import { typography } from "../../types/Typography";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  value: string;
  onChange: NonNullable<
    TextareaHTMLAttributes<HTMLTextAreaElement>["onChange"]
  >;
  label: string;
  hideLabel?: boolean;
  maxLength: number;
  helpText?: string;
  isError?: boolean;
};

export const TextArea = ({
  label,
  isError,
  hideLabel,
  helpText,
  onChange,
  className,
  ...props
}: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const font = typography.find((item) => item.key === "body");

  if (!font) throw new Error("font not found");

  return (
    <div className={classNames(styles.wrapper, className)}>
      {!hideLabel && (
        <Text className={styles.label} size="subheadline-strong">
          {label}
        </Text>
      )}
      <div
        className={classNames(styles.areaWrapper, isError && styles.error)}
        onClick={() => textareaRef.current?.focus()}
      >
        <textarea
          ref={textareaRef}
          className={styles.textarea}
          style={{
            fontSize: `${font.size}px`,
            lineHeight: `${font.lineHeight}px`,
            fontWeight: font.weight,
          }}
          onChange={(e) =>
            // textarea 의 maxLength 속성은
            // 한글을 한글자 더 허용해주는 척 하는 문제가 있어서
            // onChange 에서 직접 제어한다
            onChange({
              ...e,
              target: {
                ...e.target,
                value: e.target.value.slice(0, props.maxLength),
              },
            })
          }
          {...props}
        />
        <Text
          className={styles.helper}
          size="caption-2-strong"
          color="--Neutral-Colors-Foreground-Tertiary"
        >
          {props.value.length}/{props.maxLength}
        </Text>
      </div>
      {helpText && (
        <div className={styles.helpTextWrapper}>
          {isError && (
            <IconExclaminationCircleFill
              className={classNames(styles.helpText, styles.error)}
              size={16}
            />
          )}
          <Text
            className={classNames(styles.helpText, isError && styles.error)}
            size="caption-1"
          >
            {helpText}
          </Text>
        </div>
      )}
    </div>
  );
};
