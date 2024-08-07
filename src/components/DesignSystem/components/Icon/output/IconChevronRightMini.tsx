
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M8.72059 18.0285C8.42769 17.7356 8.42769 17.2607 8.72059 16.9678L13.6884 12L8.72059 7.03216C8.42769 6.73927 8.42769 6.26439 8.72059 5.9715C9.01348 5.67861 9.48835 5.67861 9.78125 5.9715L15.2794 11.4697C15.5723 11.7626 15.5723 12.2374 15.2794 12.5303L9.78125 18.0285C9.48835 18.3214 9.01348 18.3214 8.72059 18.0285Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronRightMini = createReactComponent(
  "outline",
  "Icon_Chevron_Right-mini",
  "IconChevronRightMini",
  node
);
    