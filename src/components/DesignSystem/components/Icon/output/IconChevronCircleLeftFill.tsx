
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12.3461 7.42802C12.6982 7.07591 13.269 7.07591 13.6212 7.42802C13.9733 7.78014 13.9733 8.35102 13.6212 8.70314L10.3243 12L13.6212 15.2969C13.9733 15.649 13.9733 16.2199 13.6212 16.572C13.269 16.9241 12.6982 16.9241 12.3461 16.572L8.41163 12.6376C8.05951 12.2854 8.05951 11.7146 8.41163 11.3624L12.3461 7.42802Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronCircleLeftFill = createReactComponent(
  "outline",
  "Icon_Chevron-circle_Left_Fill",
  "IconChevronCircleLeftFill",
  node
);
    