
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 22C3.89543 22 3 21.1046 3 20V9.68792C3 9.05499 3.2996 8.4594 3.8078 8.0821L10.8078 2.88512C11.5157 2.35954 12.4843 2.35954 13.1922 2.88512L20.1922 8.0821C20.7004 8.4594 21 9.05498 21 9.68792V20C21 21.1046 20.1046 22 19 22H15.3846C14.2801 22 13.3846 21.1046 13.3846 20V14.9652H10.6154V20C10.6154 21.1046 9.71994 22 8.61538 22H5Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconHomeFill = createReactComponent(
  "outline",
  "Icon_Home_Fill",
  "IconHomeFill",
  node
);
    