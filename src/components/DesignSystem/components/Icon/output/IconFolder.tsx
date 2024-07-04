
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M4.11823 4C2.94836 4 2 4.94487 2 6.11043V17.8896C2 19.0551 2.94836 20 4.11823 20H19.8818C21.0516 20 22 19.0551 22 17.8896V8.72802C22 7.56246 21.0516 6.61759 19.8818 6.61759H12.0729C11.6113 6.61759 11.1668 6.44304 10.8293 6.1292L9.14998 4.56759C8.75775 4.20285 8.24121 4 7.70468 4H4.11823ZM3.7734 6.11043C3.7734 5.92069 3.92778 5.76687 4.11823 5.76687H7.70468C7.79202 5.76687 7.87611 5.79989 7.93996 5.85927L9.61929 7.42088C10.2852 8.04008 11.1621 8.38446 12.0729 8.38446H19.8818C20.0722 8.38446 20.2266 8.53827 20.2266 8.72802V17.8896C20.2266 18.0793 20.0722 18.2331 19.8818 18.2331H4.11823C3.92778 18.2331 3.7734 18.0793 3.7734 17.8896V6.11043Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconFolder = createReactComponent(
  "outline",
  "Icon_Folder",
  "IconFolder",
  node
);
    