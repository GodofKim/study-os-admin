
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 17V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconStopFill = createReactComponent(
  "outline",
  "Icon_Stop_Fill",
  "IconStopFill",
  node
);
    