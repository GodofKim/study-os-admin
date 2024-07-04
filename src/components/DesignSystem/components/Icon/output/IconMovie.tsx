
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.8 4L6.6 8H9.3L7.5 4H9.3L11.1 8H13.8L12 4H13.8L15.6 8H18.3L16.5 4H19.2C19.695 4 20.1187 4.19583 20.4713 4.5875C20.8237 4.97917 21 5.45 21 6V18C21 18.55 20.8237 19.0208 20.4713 19.4125C20.1187 19.8042 19.695 20 19.2 20H4.8C4.305 20 3.88125 19.8042 3.52875 19.4125C3.17625 19.0208 3 18.55 3 18V6C3 5.45 3.17625 4.97917 3.52875 4.5875C3.88125 4.19583 4.305 4 4.8 4ZM4.8 10V18H19.2V10H4.8Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconMovie = createReactComponent(
  "outline",
  "Icon_Movie",
  "IconMovie",
  node
);
    