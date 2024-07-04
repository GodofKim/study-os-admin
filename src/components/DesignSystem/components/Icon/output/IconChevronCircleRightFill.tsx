
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47714 6.47714 2 12 2C17.5228 2 22 6.47714 22 12C22 17.5228 17.5228 22 12 22C6.47714 22 2 17.5228 2 12ZM10.3788 7.42802C10.7309 7.07591 11.3018 7.07591 11.6539 7.42802L15.5883 11.3624C15.9404 11.7146 15.9404 12.2854 15.5883 12.6375L11.6539 16.572C11.3018 16.9241 10.7309 16.9241 10.3788 16.572C10.0267 16.2199 10.0267 15.649 10.3788 15.2969L13.6757 12L10.3788 8.70313C10.0267 8.35102 10.0267 7.78014 10.3788 7.42802Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronCircleRightFill = createReactComponent(
  "outline",
  "Icon_Chevron-circle_Right_Fill",
  "IconChevronCircleRightFill",
  node
);
    