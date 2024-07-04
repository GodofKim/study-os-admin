
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM7.20921 7.20921C7.48816 6.93026 7.94042 6.93026 8.21936 7.20921L12 10.9898L15.7806 7.20921C16.0596 6.93026 16.5118 6.93026 16.7908 7.20921C17.0697 7.48815 17.0697 7.94042 16.7908 8.21936L13.0102 12L16.7908 15.7806C17.0697 16.0596 17.0697 16.5118 16.7908 16.7908C16.5118 17.0697 16.0596 17.0697 15.7806 16.7908L12 13.0102L8.21936 16.7908C7.94042 17.0697 7.48816 17.0697 7.20921 16.7908C6.93026 16.5118 6.93026 16.0596 7.20921 15.7806L10.9898 12L7.20921 8.21936C6.93026 7.94042 6.93026 7.48816 7.20921 7.20921Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconXCircleFill = createReactComponent(
  "outline",
  "Icon_X-circle_Fill",
  "IconXCircleFill",
  node
);
    