
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7902 4.44199C17.5206 3.99431 16.9518 3.85591 16.526 4.17023C16.1173 4.47199 16.0187 5.06397 16.2801 5.49823L18.4432 9.09108H3.9C3.37947 9.09108 3 9.54986 3 10.0607C3 10.5716 3.37947 11.0304 3.9 11.0304H20.1C20.4455 11.0304 20.7478 10.8202 20.8982 10.5091C21.0477 10.1998 21.032 9.82646 20.855 9.53261L17.7902 4.44199Z" fill="#222222"/>
<path d="M20.1 12.9696L3.9 12.9696C3.55451 12.9696 3.25218 13.1798 3.10181 13.4909C2.95235 13.8002 2.96805 14.1735 3.14497 14.4674L6.20983 19.558C6.47936 20.0057 7.04817 20.1441 7.47395 19.8298C7.88274 19.528 7.98135 18.936 7.7199 18.5018L5.55678 14.9089L20.1 14.9089C20.6205 14.9089 21 14.4501 21 13.9393C21 13.4284 20.6205 12.9696 20.1 12.9696Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconArrowRightLeft = createReactComponent(
  "outline",
  "Icon_Arrow_Right-left",
  "IconArrowRightLeft",
  node
);
    