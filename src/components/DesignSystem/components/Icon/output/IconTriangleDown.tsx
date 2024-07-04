
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18L4 6L20 6L12 18Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconTriangleDown = createReactComponent(
  "outline",
  "Icon_Triangle_Down",
  "IconTriangleDown",
  node
);
    