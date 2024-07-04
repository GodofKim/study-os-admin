
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#FFC200"/>
<path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" fill="#FFE057"/>
<path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" fill="#FFC200"/>
<path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#FFE057"/>
<path d="M17.2 15.2C17.2 16.3045 16.3045 17.2 15.2 17.2C14.0954 17.2 13.2 16.3045 13.2 15.2C13.2 14.0954 14.0954 13.2 15.2 13.2C16.3045 13.2 17.2 14.0954 17.2 15.2Z" fill="#FFC200"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconCoin = createReactComponent(
  "outline",
  "Icon_Coin",
  "IconCoin",
  node
);
    