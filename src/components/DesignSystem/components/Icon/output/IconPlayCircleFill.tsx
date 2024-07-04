
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9.37705 9.39836C9.37705 8.63808 10.1726 8.13448 10.8276 8.53087L15.1269 11.1325C15.7664 11.5195 15.7664 12.4805 15.1269 12.8675L10.8276 15.4691C10.1726 15.8655 9.37704 15.3619 9.37704 14.6016L9.37705 9.39836Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconPlayCircleFill = createReactComponent(
  "outline",
  "Icon_Play-circle_Fill",
  "IconPlayCircleFill",
  node
);
    