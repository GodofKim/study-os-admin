import { PropsWithChildren } from "react";
import { classNames } from "../../utils/classNames";

import styles from "./index.module.css";
import { IconExclaminationCircleFill } from "../../main";

interface Props {
  hideLabel?: boolean;
  label?: string;
  required?: boolean;
  children?: React.ReactNode;
  className?: string;
  isValid?: boolean;
  dataComponentTestId?: string;
  errorMessage?: string;
  helperMessage?: string;
  style?: React.CSSProperties;
}

export const InputWrapper = ({
  hideLabel,
  label,
  required,
  children,
  className,
  isValid,
  dataComponentTestId,
  errorMessage,
  helperMessage,
  style,
}: PropsWithChildren<Props>) => {
  const messageToShow =
    !isValid && errorMessage
      ? { message: errorMessage, isError: true }
      : helperMessage
      ? { message: helperMessage, isError: false }
      : undefined;

  return (
    <div
      className={classNames(styles.wrapper, className)}
      data-errored={!isValid}
      data-testid={dataComponentTestId}
      style={style}
    >
      <div>
        <div
          className={classNames(
            styles.labelBox,
            hideLabel ? styles.labelBoxHidden : undefined
          )}
        >
          <span>{label}</span>
          {required && <span className={styles.labelRequiredIndicator}>*</span>}
        </div>

        {children}
      </div>

      {/* --- 메시지 영역 --- */}
      {!!messageToShow && (
        <div
          className={classNames(
            styles.messageBox,
            messageToShow.isError ? styles.messageBoxErrored : undefined
          )}
        >
          {messageToShow.isError && (
            <IconExclaminationCircleFill
              size={16}
              className={styles.messageBoxIcon}
            />
          )}
          {messageToShow.message}
        </div>
      )}
    </div>
  );
};
