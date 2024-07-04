
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.75C11.0335 2.75 10.25 3.5335 10.25 4.5C10.25 5.4665 11.0335 6.25 12 6.25C12.9665 6.25 13.75 5.4665 13.75 4.5C13.75 3.5335 12.9665 2.75 12 2.75Z" fill="#222222"/>
<path d="M12 10.25C11.0335 10.25 10.25 11.0335 10.25 12C10.25 12.9665 11.0335 13.75 12 13.75C12.9665 13.75 13.75 12.9665 13.75 12C13.75 11.0335 12.9665 10.25 12 10.25Z" fill="#222222"/>
<path d="M12 17.75C11.0335 17.75 10.25 18.5335 10.25 19.5C10.25 20.4665 11.0335 21.25 12 21.25C12.9665 21.25 13.75 20.4665 13.75 19.5C13.75 18.5335 12.9665 17.75 12 17.75Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconEllipsisVertical = createReactComponent(
  "outline",
  "Icon_Ellipsis-vertical",
  "IconEllipsisVertical",
  node
);
    