
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11.0352 8.15277C11.0127 7.52288 11.5173 7 12.1475 7C12.7778 7 13.2824 7.52288 13.2599 8.15277L13.0754 13.3178C13.0576 13.8174 12.6474 14.2131 12.1475 14.2131C11.6477 14.2131 11.2375 13.8174 11.2197 13.3178L11.0352 8.15277ZM11 16.0164C11 15.3826 11.5138 14.8689 12.1475 14.8689C12.7813 14.8689 13.2951 15.3826 13.2951 16.0164C13.2951 16.6502 12.7813 17.1639 12.1475 17.1639C11.5138 17.1639 11 16.6502 11 16.0164Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconExclaminationCircleFill = createReactComponent(
  "outline",
  "Icon_Exclamination-circle_Fill",
  "IconExclaminationCircleFill",
  node
);
    