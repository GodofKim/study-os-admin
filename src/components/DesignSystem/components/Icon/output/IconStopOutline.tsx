
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M6.5 7V17C6.5 17.2761 6.72386 17.5 7 17.5H17C17.2761 17.5 17.5 17.2761 17.5 17V7C17.5 6.72386 17.2761 6.5 17 6.5H7C6.72386 6.5 6.5 6.72386 6.5 7ZM5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconStopOutline = createReactComponent(
  "outline",
  "Icon_Stop_Outline",
  "IconStopOutline",
  node
);
    