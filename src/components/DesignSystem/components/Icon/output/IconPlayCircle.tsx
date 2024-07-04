
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8277 8.53088C10.1726 8.13449 9.37705 8.6381 9.37705 9.39838L9.37705 14.6016C9.37705 15.3619 10.1726 15.8655 10.8277 15.4691L15.1269 12.8675C15.7664 12.4805 15.7664 11.5195 15.1269 11.1325L10.8277 8.53088Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.80328 12C3.80328 7.47308 7.47308 3.80328 12 3.80328C16.5269 3.80328 20.1967 7.47308 20.1967 12C20.1967 16.5269 16.5269 20.1967 12 20.1967C7.47308 20.1967 3.80328 16.5269 3.80328 12Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconPlayCircle = createReactComponent(
  "outline",
  "Icon_Play-circle",
  "IconPlayCircle",
  node
);
    