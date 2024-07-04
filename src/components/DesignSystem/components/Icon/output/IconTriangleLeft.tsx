
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L17 4L17 20L5 12Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconTriangleLeft = createReactComponent(
  "outline",
  "Icon_Triangle_Left",
  "IconTriangleLeft",
  node
);
    