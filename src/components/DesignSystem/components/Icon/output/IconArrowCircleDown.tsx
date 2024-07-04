
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7541 5.93443C11.2561 5.93443 10.8525 6.3381 10.8525 6.83607V14.4954L8.45723 12.1002C8.10512 11.748 7.53423 11.748 7.18212 12.1002C6.83001 12.4523 6.83001 13.0231 7.18212 13.3753L11.1165 17.3097C11.4687 17.6618 12.0395 17.6618 12.3917 17.3097L16.3261 13.3753C16.6782 13.0231 16.6782 12.4523 16.3261 12.1001C15.974 11.748 15.4031 11.748 15.051 12.1002L12.6557 14.4954V6.83607C12.6557 6.3381 12.2521 5.93443 11.7541 5.93443Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.80328 12C3.80328 7.47308 7.47308 3.80328 12 3.80328C16.5269 3.80328 20.1967 7.47308 20.1967 12C20.1967 16.5269 16.5269 20.1967 12 20.1967C7.47308 20.1967 3.80328 16.5269 3.80328 12Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconArrowCircleDown = createReactComponent(
  "outline",
  "Icon_Arrow-circle_Down",
  "IconArrowCircleDown",
  node
);
    