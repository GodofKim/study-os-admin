
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 11C6.82843 11 7.5 10.3284 7.5 9.5C7.5 8.67157 6.82843 8 6 8C5.17157 8 4.5 8.67157 4.5 9.5C4.5 10.3284 5.17157 11 6 11Z" fill="#222222"/>
<path d="M6 16C6.82843 16 7.5 15.3284 7.5 14.5C7.5 13.6716 6.82843 13 6 13C5.17157 13 4.5 13.6716 4.5 14.5C4.5 15.3284 5.17157 16 6 16Z" fill="#222222"/>
<path d="M13.5 9.5C13.5 10.3284 12.8284 11 12 11C11.1716 11 10.5 10.3284 10.5 9.5C10.5 8.67157 11.1716 8 12 8C12.8284 8 13.5 8.67157 13.5 9.5Z" fill="#222222"/>
<path d="M12 16C12.8284 16 13.5 15.3284 13.5 14.5C13.5 13.6716 12.8284 13 12 13C11.1716 13 10.5 13.6716 10.5 14.5C10.5 15.3284 11.1716 16 12 16Z" fill="#222222"/>
<path d="M19.5 9.5C19.5 10.3284 18.8284 11 18 11C17.1716 11 16.5 10.3284 16.5 9.5C16.5 8.67157 17.1716 8 18 8C18.8284 8 19.5 8.67157 19.5 9.5Z" fill="#222222"/>
<path d="M18 16C18.8284 16 19.5 15.3284 19.5 14.5C19.5 13.6716 18.8284 13 18 13C17.1716 13 16.5 13.6716 16.5 14.5C16.5 15.3284 17.1716 16 18 16Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconMove = createReactComponent(
  "outline",
  "Icon_Move",
  "IconMove",
  node
);
    