
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 9.75C4.5335 9.75 3.75 10.5335 3.75 11.5C3.75 12.4665 4.5335 13.25 5.5 13.25C6.4665 13.25 7.25 12.4665 7.25 11.5C7.25 10.5335 6.4665 9.75 5.5 9.75Z" fill="#222222"/>
<path d="M12 9.75C11.0335 9.75 10.25 10.5335 10.25 11.5C10.25 12.4665 11.0335 13.25 12 13.25C12.9665 13.25 13.75 12.4665 13.75 11.5C13.75 10.5335 12.9665 9.75 12 9.75Z" fill="#222222"/>
<path d="M18.5 9.75C17.5335 9.75 16.75 10.5335 16.75 11.5C16.75 12.4665 17.5335 13.25 18.5 13.25C19.4665 13.25 20.25 12.4665 20.25 11.5C20.25 10.5335 19.4665 9.75 18.5 9.75Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconEllipsisHorizontal = createReactComponent(
  "outline",
  "Icon_Ellipsis-horizontal",
  "IconEllipsisHorizontal",
  node
);
    