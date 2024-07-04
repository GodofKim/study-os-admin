
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.51429 3C5.12568 3 4 4.15968 4 5.59021V19.8208C4 20.7402 4.97725 21.3049 5.7388 20.8254L12 16.8836L18.2612 20.8254C19.0227 21.3049 20 20.7402 20 19.8208V5.59021C20 4.15968 18.8743 3 17.4857 3H6.51429Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconBookmarkFill = createReactComponent(
  "outline",
  "Icon_Bookmark_Fill",
  "IconBookmarkFill",
  node
);
    