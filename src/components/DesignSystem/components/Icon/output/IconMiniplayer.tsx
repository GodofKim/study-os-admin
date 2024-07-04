
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 11.1111C11.0168 11.1111 10.625 11.5091 10.625 12V16C10.625 16.4909 11.0168 16.8889 11.5 16.8889H18.0625C18.5457 16.8889 18.9375 16.4909 18.9375 16V12C18.9375 11.5091 18.5457 11.1111 18.0625 11.1111H11.5Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M2 5.77778C2 4.79594 2.7835 4 3.75 4H20.25C21.2165 4 22 4.79594 22 5.77778V18.2222C22 19.2041 21.2165 20 20.25 20H3.75C2.7835 20 2 19.2041 2 18.2222V5.77778ZM3.75 5.6H20.25C20.3466 5.6 20.425 5.67959 20.425 5.77778V18.2222C20.425 18.3204 20.3466 18.4 20.25 18.4H3.75C3.65335 18.4 3.575 18.3204 3.575 18.2222V5.77778C3.575 5.67959 3.65335 5.6 3.75 5.6Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconMiniplayer = createReactComponent(
  "outline",
  "Icon_Miniplayer",
  "IconMiniplayer",
  node
);
    