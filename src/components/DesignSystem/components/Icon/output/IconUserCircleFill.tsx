
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10ZM12 20.5C8.94545 20.5 6.72727 18.8333 6 18C11.2364 13.2 16.1818 16 18 18C17.2727 18.8333 15.0545 20.5 12 20.5Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconUserCircleFill = createReactComponent(
  "outline",
  "Icon_User-circle_Fill",
  "IconUserCircleFill",
  node
);
    