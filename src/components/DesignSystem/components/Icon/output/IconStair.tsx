
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M14.1788 4.64865C14.1788 4.29041 14.4692 4 14.8274 4H19.3514C19.7096 4 20 4.29041 20 4.64865C20 5.00689 19.7096 5.2973 19.3514 5.2973H15.4761V9.73805C15.4761 10.0963 15.1857 10.3867 14.8274 10.3867H10.3867V14.8274C10.3867 15.1857 10.0963 15.4761 9.73805 15.4761H5.2973V19.3514C5.2973 19.7096 5.00689 20 4.64865 20C4.29041 20 4 19.7096 4 19.3514V14.8274C4 14.4692 4.29041 14.1788 4.64865 14.1788H9.0894V9.73805C9.0894 9.37981 9.37981 9.0894 9.73805 9.0894H14.1788V4.64865Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconStair = createReactComponent(
  "outline",
  "Icon_Stair",
  "IconStair",
  node
);
    