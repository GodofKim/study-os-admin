import { forwardRef, createElement, ReactElement, Fragment } from "react";
import defaultAttributes from "./defaultAttributes";
import type { IconNode, IconProps } from "./types";

// 재귀적으로 SVG 요소를 생성하는 함수
function createSvgElement(node: IconNode, color: string): ReactElement[] {
  return node.map(([elementName, attrs, children], index) =>
    createElement(
      elementName,
      { ...attrs, key: attrs.id || `icon-${index}`, fill: color }, // key를 추가하여 React 리스트에서의 오류 방지
      children && children.length > 0
        ? children.map((childNode) => createSvgElement(childNode, color))
        : undefined // 자식이 있으면 재귀적으로 처리
    )
  );
}

const createReactComponent = (
  type: "outline" | "filled",
  iconName: string,
  iconNamePascal: string,
  iconNode: IconNode
) => {
  const Component = forwardRef<SVGSVGElement, IconProps>(
    (
      {
        color = "currentColor",
        size = 18,
        stroke = 0,
        className = "",
        children,
        ...rest
      },
      ref
    ) =>
      createElement(
        "svg",
        {
          ref,
          ...defaultAttributes[type],
          width: size,
          height: size,
          stroke: color,
          strokeWidth: stroke,
          className: [`qanda-icon`, `qanda-icon-${iconName}`, className].join(
            " "
          ),
          ...rest,
        },
        [
          ...createSvgElement(iconNode, color),
          ...(Array.isArray(children) ? children : [children]),
        ].map((element, index) =>
          createElement(Fragment, { key: index }, element)
        )
      )
  );

  Component.displayName = `${iconNamePascal}`;

  return Component;
};

export default createReactComponent;
