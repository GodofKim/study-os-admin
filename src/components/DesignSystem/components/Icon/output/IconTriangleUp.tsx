
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L20 18H4L12 6Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconTriangleUp = createReactComponent(
  "outline",
  "Icon_Triangle_Up",
  "IconTriangleUp",
  node
);
    