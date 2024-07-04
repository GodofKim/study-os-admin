import { HTMLAttributes, useEffect, useRef, useState } from "react";

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

export const Accordion = ({
  isOpen,
  children,
  style,
  ...props
}: AccordionProps) => {
  const [height, setHeight] = useState<number | null>(isOpen ? null : 0);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentHeight = contentRef.current?.scrollHeight;

  useEffect(() => {
    if (isOpen) {
      setHeight(contentHeight ?? null);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      {...props}
      style={{
        height: height ?? "auto",
        overflow: "hidden",
        transition: "height 0.3s ease-in-out",
        ...style,
      }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
};
