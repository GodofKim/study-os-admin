
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M11.7217 4.28909C12.6918 2.47458 14.1319 2.60066 14.9448 4.50934C15.3053 5.3558 15.5032 6.59198 15.2904 7.49883L14.8559 9.35089H18.2473C20.0456 9.35089 21.3605 11.2483 20.9114 13.1953L19.7985 18.0204C19.3939 19.7744 17.9792 21 16.3592 21H9C8.44772 21 8 20.5523 8 20V12.0013C8 11.5078 8.12174 11.0219 8.35443 10.5867L11.7217 4.28909Z" fill="#222222"/>
<path d="M4.56563 21C5.35781 21 6 20.3578 6 19.5656V12.4344C6 11.6422 5.35781 11 4.56563 11H4.43437C3.64219 11 3 11.6422 3 12.4344V19.5656C3 20.3578 3.64219 21 4.43437 21H4.56563Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconHandThumbUpFill = createReactComponent(
  "outline",
  "Icon_Hand-thumb_Up_Fill",
  "IconHandThumbUpFill",
  node
);
    