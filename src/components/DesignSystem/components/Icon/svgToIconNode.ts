import { ReactSVG } from "react";
import { IconNode } from "./types";

function parseAttributes(attributes: NamedNodeMap) {
  const attrs = {} as Record<string, string>;
  for (let i = 0; i < attributes.length; i++) {
    const attribute = attributes[i];
    attrs[attribute.name] = attribute.value;
  }
  return attrs;
}

function extractElements(elements: HTMLCollection): IconNode {
  const iconNodes: IconNode = [];
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i] as SVGElement;
    // SVG 요소의 자식들을 재귀적으로 추출합니다.
    const children: IconNode = extractElements(el.children);
    // 현재 요소와 자식 요소들을 포함하는 튜플을 생성합니다.
    const nodeData: IconNode = [
      [
        el.tagName.toLowerCase() as keyof ReactSVG,
        parseAttributes(el.attributes),
        children.length > 0 ? [children] : [],
      ],
    ];
    // 현재 노드 데이터를 iconNodes 배열에 추가합니다.
    iconNodes.push(...nodeData);
  }

  return iconNodes;
}

export function svgStringToIconNode(svgString: string): IconNode {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgString, "image/svg+xml");
  const svg = doc.documentElement;

  return extractElements(svg.children);
}
