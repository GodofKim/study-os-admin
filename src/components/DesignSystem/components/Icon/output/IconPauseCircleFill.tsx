
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM8.88525 9.04915C8.88525 8.41538 9.39903 7.90161 10.0328 7.90161C10.6666 7.90161 11.1803 8.41538 11.1803 9.04915V14.9508C11.1803 15.5846 10.6666 16.0983 10.0328 16.0983C9.39903 16.0983 8.88525 15.5846 8.88525 14.9508V9.04915ZM12.8197 9.04915C12.8197 8.41538 13.3335 7.90161 13.9672 7.90161C14.601 7.90161 15.1148 8.41538 15.1148 9.04915V14.9508C15.1148 15.5846 14.601 16.0983 13.9672 16.0983C13.3335 16.0983 12.8197 15.5846 12.8197 14.9508V9.04915Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconPauseCircleFill = createReactComponent(
  "outline",
  "Icon_Pause-circle_Fill",
  "IconPauseCircleFill",
  node
);
    