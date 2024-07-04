
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M6 11.75C6 11.3358 6.33579 11 6.75 11H16.75C17.1642 11 17.5 11.3358 17.5 11.75C17.5 12.1642 17.1642 12.5 16.75 12.5H6.75C6.33579 12.5 6 12.1642 6 11.75Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconMinusMini = createReactComponent(
  "outline",
  "Icon_Minus-mini",
  "IconMinusMini",
  node
);
    