
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3917 6.19851C12.0395 5.8464 11.4687 5.8464 11.1165 6.19851L7.18212 10.1329C6.83001 10.485 6.83001 11.0559 7.18212 11.408C7.53423 11.7602 8.10512 11.7602 8.45723 11.408L10.8525 9.01281V16.6721C10.8525 17.1701 11.2561 17.5738 11.7541 17.5738C12.2521 17.5738 12.6557 17.1701 12.6557 16.6721V9.01281L15.051 11.408C15.4031 11.7602 15.974 11.7602 16.3261 11.408C16.6782 11.0559 16.6782 10.485 16.3261 10.1329L12.3917 6.19851Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.80328 12C3.80328 7.47308 7.47308 3.80328 12 3.80328C16.5269 3.80328 20.1967 7.47308 20.1967 12C20.1967 16.5269 16.5269 20.1967 12 20.1967C7.47308 20.1967 3.80328 16.5269 3.80328 12Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconArrowCircleUp = createReactComponent(
  "outline",
  "Icon_Arrow-circle_Up",
  "IconArrowCircleUp",
  node
);
    