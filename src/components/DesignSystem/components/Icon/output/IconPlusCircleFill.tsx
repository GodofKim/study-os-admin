
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 6C12.4322 6 12.7826 6.35039 12.7826 6.78261V11.2174H17.2174C17.6496 11.2174 18 11.5678 18 12C18 12.4322 17.6496 12.7826 17.2174 12.7826H12.7826V17.2174C12.7826 17.6496 12.4322 18 12 18C11.5678 18 11.2174 17.6496 11.2174 17.2174V12.7826H6.78261C6.35039 12.7826 6 12.4322 6 12C6 11.5678 6.35039 11.2174 6.78261 11.2174H11.2174V6.78261C11.2174 6.35039 11.5678 6 12 6Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconPlusCircleFill = createReactComponent(
  "outline",
  "Icon_Plus-circle_Fill",
  "IconPlusCircleFill",
  node
);
    