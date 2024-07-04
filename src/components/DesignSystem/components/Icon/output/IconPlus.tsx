
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0001 3C11.503 3 11.1001 3.40294 11.1001 3.9V11.1L3.9 11.1C3.40294 11.1 3 11.503 3 12C3 12.4971 3.40294 12.9 3.9 12.9L11.1001 12.9V20.1C11.1001 20.5971 11.503 21 12.0001 21C12.4972 21 12.9001 20.5971 12.9001 20.1V12.9L20.1 12.9C20.5971 12.9 21 12.4971 21 12C21 11.503 20.5971 11.1 20.1 11.1L12.9001 11.1V3.9C12.9001 3.40294 12.4972 3 12.0001 3Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconPlus = createReactComponent(
  "outline",
  "Icon_Plus",
  "IconPlus",
  node
);
    