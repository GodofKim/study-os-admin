
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M3.21967 3.21967C3.51256 2.92678 3.98744 2.92678 4.28033 3.21967L8.25 7.18934V4.5C8.25 4.08579 8.58579 3.75 9 3.75C9.41421 3.75 9.75 4.08579 9.75 4.5V9C9.75 9.41421 9.41421 9.75 9 9.75H4.5C4.08579 9.75 3.75 9.41421 3.75 9C3.75 8.58579 4.08579 8.25 4.5 8.25H7.18934L3.21967 4.28033C2.92678 3.98744 2.92678 3.51256 3.21967 3.21967ZM14.25 15C14.25 14.5858 14.5858 14.25 15 14.25H19.5C19.9142 14.25 20.25 14.5858 20.25 15C20.25 15.4142 19.9142 15.75 19.5 15.75H16.8107L20.7803 19.7197C21.0732 20.0126 21.0732 20.4874 20.7803 20.7803C20.4874 21.0732 20.0126 21.0732 19.7197 20.7803L15.75 16.8107V19.5C15.75 19.9142 15.4142 20.25 15 20.25C14.5858 20.25 14.25 19.9142 14.25 19.5V15Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconArrowsPointingIn = createReactComponent(
  "outline",
  "Icon_Arrows_Pointing-in",
  "IconArrowsPointingIn",
  node
);
    