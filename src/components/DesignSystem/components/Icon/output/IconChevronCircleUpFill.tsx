
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM7.42802 12.3461L11.3625 8.41167C11.7146 8.05955 12.2855 8.05956 12.6376 8.41167L16.572 12.3461C16.9241 12.6982 16.9241 13.2691 16.572 13.6212C16.2199 13.9733 15.649 13.9733 15.2969 13.6212L12 10.3243L8.70313 13.6212C8.35102 13.9733 7.78014 13.9733 7.42802 13.6212C7.07591 13.2691 7.07591 12.6982 7.42802 12.3461Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronCircleUpFill = createReactComponent(
  "outline",
  "Icon_Chevron-circle_Up_Fill",
  "IconChevronCircleUpFill",
  node
);
    