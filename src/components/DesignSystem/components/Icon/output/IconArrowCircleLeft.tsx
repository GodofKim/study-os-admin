
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.408 7.18212C11.0559 6.83001 10.485 6.83001 10.1329 7.18212L6.19851 11.1165C5.8464 11.4687 5.8464 12.0395 6.19851 12.3917L10.1329 16.3261C10.485 16.6782 11.0559 16.6782 11.408 16.3261C11.7602 15.974 11.7602 15.4031 11.408 15.051L9.01281 12.6557H16.6721C17.1701 12.6557 17.5738 12.2521 17.5738 11.7541C17.5738 11.2561 17.1701 10.8525 16.6721 10.8525H9.01282L11.408 8.45723C11.7602 8.10512 11.7602 7.53423 11.408 7.18212Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.80328 12C3.80328 7.47308 7.47308 3.80328 12 3.80328C16.5269 3.80328 20.1967 7.47308 20.1967 12C20.1967 16.5269 16.5269 20.1967 12 20.1967C7.47308 20.1967 3.80328 16.5269 3.80328 12Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconArrowCircleLeft = createReactComponent(
  "outline",
  "Icon_Arrow-circle_Left",
  "IconArrowCircleLeft",
  node
);
    