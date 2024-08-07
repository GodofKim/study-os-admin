
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3753 7.18212C13.0231 6.83 12.4523 6.83 12.1002 7.18212C11.748 7.53423 11.748 8.10512 12.1002 8.45723L14.4954 10.8525L6.83607 10.8525C6.3381 10.8525 5.93443 11.2561 5.93443 11.7541C5.93443 12.2521 6.3381 12.6557 6.83607 12.6557L14.4954 12.6557L12.1002 15.051C11.748 15.4031 11.748 15.974 12.1002 16.3261C12.4523 16.6782 13.0231 16.6782 13.3753 16.3261L17.3097 12.3917C17.6618 12.0395 17.6618 11.4687 17.3097 11.1165L13.3753 7.18212Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.80328 12C3.80328 7.47308 7.47308 3.80328 12 3.80328C16.5269 3.80328 20.1967 7.47308 20.1967 12C20.1967 16.5269 16.5269 20.1967 12 20.1967C7.47308 20.1967 3.80328 16.5269 3.80328 12Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconArrowCircleRight = createReactComponent(
  "outline",
  "Icon_Arrow-circle_Right",
  "IconArrowCircleRight",
  node
);
    