
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.90632 11.2C3.40972 11.2 3 11.599 3 12.1C3 12.601 3.40972 13 3.90632 13H20.0937C20.5903 13 21 12.601 21 12.1C21 11.599 20.5903 11.2 20.0937 11.2H3.90632Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconMinus = createReactComponent(
  "outline",
  "Icon_Minus",
  "IconMinus",
  node
);
    