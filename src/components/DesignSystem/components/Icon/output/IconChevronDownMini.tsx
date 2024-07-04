
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5.9715 8.72059C6.26439 8.42769 6.73927 8.42769 7.03216 8.72059L12 13.6884L16.9678 8.72059C17.2607 8.42769 17.7356 8.42769 18.0285 8.72059C18.3214 9.01348 18.3214 9.48835 18.0285 9.78125L12.5303 15.2794C12.2374 15.5723 11.7626 15.5723 11.4697 15.2794L5.9715 9.78125C5.67861 9.48835 5.67861 9.01348 5.9715 8.72059Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronDownMini = createReactComponent(
  "outline",
  "Icon_Chevron_Down-mini",
  "IconChevronDownMini",
  node
);
    