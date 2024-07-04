
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.6376 15.5884L16.572 11.6539C16.9241 11.3018 16.9241 10.7309 16.572 10.3788C16.2199 10.0267 15.649 10.0267 15.2969 10.3788L12 13.6757L8.70314 10.3788C8.35102 10.0267 7.78014 10.0267 7.42802 10.3788C7.07591 10.7309 7.07591 11.3018 7.42802 11.6539L11.3624 15.5884C11.7146 15.9405 12.2854 15.9405 12.6376 15.5884Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronCircleDownFill = createReactComponent(
  "outline",
  "Icon_Chevron-circle_Down_Fill",
  "IconChevronCircleDownFill",
  node
);
    