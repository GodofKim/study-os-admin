
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M14.463 5.30005V12.0245L9.55392 5.30005H4.25V18.6334H9.53704V11.9038L14.445 18.6334H19.75V5.30005H14.463Z" fill="white"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconNaver = createReactComponent(
  "outline",
  "Icon_Naver",
  "IconNaver",
  node
);
    