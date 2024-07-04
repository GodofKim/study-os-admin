
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.21232 15.718C6.91974 16.0106 6.91974 16.485 7.21232 16.7775C7.50491 17.0701 7.97928 17.0701 8.27186 16.7775L11.9947 13.0547L15.7176 16.7775C16.0102 17.0701 16.4845 17.0701 16.7771 16.7775C17.0697 16.485 17.0697 16.0106 16.7771 15.718L13.0543 11.9951L16.7771 8.27226C17.0697 7.97968 17.0697 7.50531 16.7771 7.21272C16.4846 6.92014 16.0102 6.92014 15.7176 7.21272L11.9947 10.9356L8.27183 7.21273C7.97925 6.92014 7.50488 6.92014 7.2123 7.21273C6.91971 7.50531 6.91971 7.97968 7.2123 8.27226L10.9352 11.9951L7.21232 15.718Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconXMini = createReactComponent(
  "outline",
  "Icon_X-mini",
  "IconXMini",
  node
);
    