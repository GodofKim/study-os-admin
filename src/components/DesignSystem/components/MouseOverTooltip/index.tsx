import { type HTMLAttributes, useLayoutEffect, useRef, useState } from "react";

import styles from "./index.module.css";
import { classNames } from "../../utils/classNames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
}

export const MouseOverTooltip = ({ text, className, ...restProps }: Props) => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const textWidth = textRef.current.offsetWidth;

    if (textWidth > containerWidth) {
      setIsOverflowing(true);
    } else {
      setIsOverflowing(false);
    }
  }, [text]);

  return (
    <div
      className={classNames(
        styles.wrapper,
        className,
        isOverflowing ? styles.overflowing : ""
      )}
      {...restProps}
    >
      <div className={styles.textContainer} ref={containerRef}>
        <span ref={textRef}>{text}</span>
      </div>
      {isOverflowing && (
        <>
          <div className={styles.clearMargin} />
          <div className={styles.inspectorAnchor}>
            <div className={styles.inspector}>{text}</div>
          </div>
        </>
      )}
    </div>
  );
};
