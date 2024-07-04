
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.274 6.55315C19.9368 6.18668 19.3664 6.16291 19 6.50006L9.32975 15.5718L4.73569 11.1867C4.37302 10.8455 3.8024 10.8629 3.46117 11.2255C3.11993 11.5882 3.13731 12.1588 3.49997 12.5001L8.70499 17.46C9.0493 17.784 9.58538 17.787 9.93331 17.4669L20.2209 7.82715C20.5873 7.49 20.6111 6.91961 20.274 6.55315Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconCheck = createReactComponent(
  "outline",
  "Icon_Check",
  "IconCheck",
  node
);
    