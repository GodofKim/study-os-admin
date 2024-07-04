
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM7 9L9.12058 15H10.4615L11.9792 10.7818H12.0312L13.5385 15H14.8794L17 9H15.5447L14.183 13.4254H14.1206L12.6653 9H11.3347L9.88981 13.4171H9.81705L8.4553 9H7Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconWORD = createReactComponent(
  "outline",
  "Icon_WORD",
  "IconWORD",
  node
);
    