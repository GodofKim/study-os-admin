
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6539 7.428C11.3018 7.07589 10.7309 7.07589 10.3788 7.428C10.0267 7.78012 10.0267 8.351 10.3788 8.70311L13.6757 12L10.3788 15.2968C10.0267 15.6489 10.0267 16.2198 10.3788 16.5719C10.7309 16.9241 11.3018 16.9241 11.6539 16.5719L15.5883 12.6375C15.9405 12.2854 15.9405 11.7145 15.5883 11.3624L11.6539 7.428Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47714 2 2 6.47714 2 12C2 17.5228 6.47714 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47714 17.5228 2 12 2ZM3.80327 12C3.80327 7.47306 7.47306 3.80327 12 3.80327C16.5269 3.80327 20.1967 7.47306 20.1967 12C20.1967 16.5269 16.5269 20.1967 12 20.1967C7.47306 20.1967 3.80327 16.5269 3.80327 12Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronCircleRight = createReactComponent(
  "outline",
  "Icon_Chevron-circle_Right",
  "IconChevronCircleRight",
  node
);
    