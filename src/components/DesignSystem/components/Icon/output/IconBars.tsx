
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99382 4C3.45866 4 3 4.41102 3 4.94766C3 5.4843 3.45866 5.89532 3.99382 5.89532H20.0062C20.5413 5.89532 21 5.4843 21 4.94766C21 4.41102 20.5413 4 20.0062 4H3.99382Z" fill="#222222"/>
<path d="M3.99382 11.0523C3.45866 11.0523 3 11.4634 3 12C3 12.5366 3.45866 12.9477 3.99382 12.9477H20.0062C20.5413 12.9477 21 12.5366 21 12C21 11.4634 20.5413 11.0523 20.0062 11.0523H3.99382Z" fill="#222222"/>
<path d="M3.99382 18.1047C3.45866 18.1047 3 18.5157 3 19.0523C3 19.589 3.45866 20 3.99382 20H20.0062C20.5413 20 21 19.589 21 19.0523C21 18.5157 20.5413 18.1047 20.0062 18.1047H3.99382Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconBars = createReactComponent(
  "outline",
  "Icon_Bars",
  "IconBars",
  node
);
    