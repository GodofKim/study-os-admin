
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.79998 19.7243C4.79998 20.0004 5.02383 20.2243 5.29998 20.2243H8.3154C8.59154 20.2243 8.8154 20.0004 8.8154 19.7243V13.6895C8.8154 13.4134 9.03926 13.1895 9.3154 13.1895H14.6846C14.9607 13.1895 15.1846 13.4134 15.1846 13.6895V19.7243C15.1846 20.0004 15.4085 20.2243 15.6846 20.2243H18.7C18.9762 20.2243 19.2 20.0004 19.2 19.7243V9.82108C19.2 9.66292 19.1252 9.51408 18.9982 9.41975L12.2982 4.44123C12.1212 4.30967 11.8788 4.30967 11.7018 4.44123L5.00176 9.41975C4.87481 9.51408 4.79998 9.66292 4.79998 9.82108V19.7243ZM5 22C3.89543 22 3 21.1046 3 20V9.68792C3 9.05499 3.2996 8.4594 3.8078 8.0821L10.8078 2.88512C11.5157 2.35954 12.4843 2.35954 13.1922 2.88512L20.1922 8.0821C20.7004 8.4594 21 9.05498 21 9.68792V20C21 21.1046 20.1046 22 19 22H15.3846C14.2801 22 13.3846 21.1046 13.3846 20V14.9652H10.6154V20C10.6154 21.1046 9.71994 22 8.61538 22H5Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconHome = createReactComponent(
  "outline",
  "Icon_Home",
  "IconHome",
  node
);
    