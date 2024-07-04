
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M17 2V5.21118H14.7364C14.7364 5.21118 13.5311 5.28511 13.5311 6.67238C13.5311 8.05964 13.5311 8.70546 13.5311 8.70546H17L16.5867 12.1658L13.5311 12.187V22H9.27718V12.1658L7 12.187V8.70546H9.27718V5.96959C9.27718 5.96959 9.37104 2 13.0574 2C16.7437 2 17 2 17 2Z" fill="white"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconFacebook = createReactComponent(
  "outline",
  "Icon_Facebook",
  "IconFacebook",
  node
);
    