import {
  ComponentProps,
  ReactNode,
  createContext,
  forwardRef,
  useContext,
  useEffect,
} from "react";
import { classNames } from "../../utils/classNames";
import { Text } from "../Text";
import styles from "./index.module.css";
import { Group } from "../Group";
import { Button, IconX } from "../../main";
import { useClickOutside } from "@mantine/hooks";
import { createPortal } from "react-dom";
import { IconButton } from "../IconButton";
import { getColor } from "../../types/Color";

interface Props {
  root?: HTMLElement;
  isOpened?: boolean;
  title?: ReactNode;
  subText?: ReactNode;
  children?: ReactNode;
  size?: "Small" | "Medium" | "Large";
  onClose?: () => void;
  cancelButton?: ReactNode;
  confirmButton?: ReactNode;
  closeOnOutsideClick?: boolean;
  zIndex?: number;
  className?: string;
}

export const Modal = ({
  root = document.body,
  isOpened,
  title,
  subText,
  children,
  size = "Small",
  closeOnOutsideClick = true,
  onClose,
  cancelButton,
  confirmButton,
  className,
}: Props) => {
  const ref = useClickOutside(() => {
    if (closeOnOutsideClick) {
      onClose?.();
    }
  });

  useEffect(() => {
    if (!isOpened) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      if (prev === "hidden") return;
      document.body.style.overflow = prev;
    };
  }, [isOpened]);

  if (!isOpened) {
    return null;
  }

  const element = (
    <div className={classNames(styles.dimmer, className)}>
      <div ref={ref} className={classNames(styles.wrapper, styles[size])}>
        <div className={styles.header}>
          <div>
            {title && (
              <Text size="title-2" mb={8} mr={24}>
                {title}
              </Text>
            )}
          </div>
          <IconButton size="M" onClick={onClose} className={styles.closeButton}>
            <IconX
              size={24}
              color={getColor("--Neutral-Colors-Foreground-Primary")}
            />
          </IconButton>
        </div>
        <Group>
          {subText && (
            <Text color="--Neutral-Colors-Foreground-Secondary" size="body">
              {subText}
            </Text>
          )}
        </Group>
        <div className={classNames(styles.content)}>{children}</div>
        {(cancelButton || confirmButton) && (
          <ButtonContext.Provider value={{ onClose }}>
            <Group justifyContent="flex-end" gap={8} mt={24}>
              {cancelButton}
              {confirmButton}
            </Group>
          </ButtonContext.Provider>
        )}
      </div>
    </div>
  );

  return createPortal(element, root);
};

Modal.CancelButton = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<typeof Button>, "variant" | "size">
>(function CancelButton(
  { onClick, className, children = "취소", ...props },
  ref
) {
  const { onClose } = useButtonContext();

  return (
    <Button
      ref={ref}
      className={classNames(className, styles.defaultButton)}
      onClick={onClick ?? onClose}
      size="S"
      variant="tertiary"
      {...props}
    >
      {children}
    </Button>
  );
});

Modal.ConfirmButton = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<typeof Button>, "size">
>(function ConfirmButton(
  { className, variant = "primary", children = "확인", ...props },
  ref
) {
  return (
    <Button
      ref={ref}
      className={classNames(className, styles.defaultButton)}
      size="S"
      variant={variant}
      {...props}
    >
      {children}
    </Button>
  );
});

const ButtonContext = createContext<{ onClose?: () => void }>({});
const useButtonContext = () => useContext(ButtonContext);
