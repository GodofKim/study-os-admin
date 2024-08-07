
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3624 8.41162L7.42802 12.346C7.07591 12.6982 7.07591 13.269 7.42802 13.6212C7.78013 13.9733 8.35102 13.9733 8.70313 13.6212L12 10.3243L15.2969 13.6212C15.649 13.9733 16.2199 13.9733 16.572 13.6212C16.9241 13.269 16.9241 12.6982 16.572 12.3461L12.6376 8.41163C12.2854 8.05951 11.7146 8.05951 11.3624 8.41162Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.80328 12C3.80328 7.47308 7.47308 3.80328 12 3.80328C16.5269 3.80328 20.1967 7.47308 20.1967 12C20.1967 16.5269 16.5269 20.1967 12 20.1967C7.47308 20.1967 3.80328 16.5269 3.80328 12Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronCircleUp = createReactComponent(
  "outline",
  "Icon_Chevron-circle_Up",
  "IconChevronCircleUp",
  node
);
    