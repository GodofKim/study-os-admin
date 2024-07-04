
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6212 7.42802C13.269 7.07591 12.6982 7.07591 12.3461 7.42802L8.41163 11.3624C8.05951 11.7146 8.05951 12.2854 8.41163 12.6376L12.3461 16.572C12.6982 16.9241 13.269 16.9241 13.6212 16.572C13.9733 16.2199 13.9733 15.649 13.6212 15.2969L10.3243 12L13.6212 8.70313C13.9733 8.35102 13.9733 7.78013 13.6212 7.42802Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.80328 12C3.80328 7.47308 7.47308 3.80328 12 3.80328C16.5269 3.80328 20.1967 7.47308 20.1967 12C20.1967 16.5269 16.5269 20.1967 12 20.1967C7.47308 20.1967 3.80328 16.5269 3.80328 12Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronCircleLeft = createReactComponent(
  "outline",
  "Icon_Chevron-circle_Left",
  "IconChevronCircleLeft",
  node
);
    