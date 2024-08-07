
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M18.0285 15.2794C17.7356 15.5723 17.2607 15.5723 16.9678 15.2794L12 10.3116L7.03216 15.2794C6.73927 15.5723 6.26439 15.5723 5.9715 15.2794C5.67861 14.9865 5.67861 14.5116 5.9715 14.2188L11.4697 8.72059C11.7626 8.42769 12.2374 8.42769 12.5303 8.72059L18.0285 14.2188C18.3214 14.5116 18.3214 14.9865 18.0285 15.2794Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronUpMini = createReactComponent(
  "outline",
  "Icon_Chevron_Up-mini",
  "IconChevronUpMini",
  node
);
    