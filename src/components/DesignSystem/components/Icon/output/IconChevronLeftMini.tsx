
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M15.2794 5.9715C15.5723 6.26439 15.5723 6.73927 15.2794 7.03216L10.3116 12L15.2794 16.9678C15.5723 17.2607 15.5723 17.7356 15.2794 18.0285C14.9865 18.3214 14.5116 18.3214 14.2188 18.0285L8.72059 12.5303C8.42769 12.2374 8.42769 11.7626 8.72059 11.4697L14.2188 5.9715C14.5116 5.67861 14.9865 5.67861 15.2794 5.9715Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronLeftMini = createReactComponent(
  "outline",
  "Icon_Chevron_Left-mini",
  "IconChevronLeftMini",
  node
);
    