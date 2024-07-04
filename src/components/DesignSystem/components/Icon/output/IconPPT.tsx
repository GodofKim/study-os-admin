
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.03591 12.0345H7.76796C8.3826 12.0345 8.68301 11.6892 8.67956 11.1851C8.68301 10.6878 8.3826 10.3529 7.76796 10.3494H7.03591V12.0345Z" fill="#222222"/>
<path d="M11.968 12.0345H11.2359V10.3494H11.968C12.5826 10.3529 12.883 10.6878 12.8796 11.1851C12.883 11.6892 12.5826 12.0345 11.968 12.0345Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM6 14.5V9.5H7.96133C9.09737 9.5 9.75 10.201 9.75 11.1851C9.75 12.183 9.08702 12.8702 7.9337 12.8702H7.03591V14.5H6ZM14.2 10.3564V9.5H17.95V10.3564H16.5461V14.5H15.6039V10.3564H14.2ZM10.2 9.5V14.5H11.2359V12.8702H12.1337C13.287 12.8702 13.95 12.183 13.95 11.1851C13.95 10.201 13.2974 9.5 12.1613 9.5H10.2Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconPPT = createReactComponent(
  "outline",
  "Icon_PPT",
  "IconPPT",
  node
);
    