
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12 18.875C15.797 18.875 18.875 15.797 18.875 12C18.875 8.20304 15.797 5.125 12 5.125C8.20304 5.125 5.125 8.20304 5.125 12C5.125 15.797 8.20304 18.875 12 18.875ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#0785F2"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconOColor = createReactComponent(
  "outline",
  "Icon_O-color",
  "IconOColor",
  node
);
    