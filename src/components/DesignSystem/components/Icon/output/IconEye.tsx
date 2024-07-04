
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 12C15 13.6569 13.6568 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6568 9 15 10.3431 15 12Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M20.8648 12.4809C21.0438 12.1808 21.0438 11.8193 20.8648 11.5191C20.0155 10.0953 17.1271 6 11.9999 6C6.87281 6 3.98366 10.095 3.134 11.5189C2.95485 11.8192 2.95485 12.1808 3.134 12.4811C3.98366 13.905 6.87281 18 11.9999 18C17.1271 18 20.0155 13.9047 20.8648 12.4809ZM11.9996 17C14.7611 17 16.9996 14.7614 16.9996 12C16.9996 9.23858 14.7611 7 11.9996 7C9.23821 7 6.99963 9.23858 6.99963 12C6.99963 14.7614 9.23821 17 11.9996 17Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconEye = createReactComponent(
  "outline",
  "Icon_Eye",
  "IconEye",
  node
);
    