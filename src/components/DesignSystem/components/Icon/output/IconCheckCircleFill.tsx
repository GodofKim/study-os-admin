
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.5145 9.54569C17.8159 9.26154 17.8299 8.78687 17.5457 8.48549C17.2615 8.18411 16.7869 8.17015 16.4855 8.45431L10.6213 13.9834L7.49815 11.2086C7.18849 10.9334 6.71445 10.9614 6.43933 11.2711C6.16422 11.5807 6.19222 12.0548 6.50187 12.3299L10.1382 15.5607C10.4287 15.8187 10.8682 15.8122 11.1509 15.5457L17.5145 9.54569Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconCheckCircleFill = createReactComponent(
  "outline",
  "Icon_Check-circle_Fill",
  "IconCheckCircleFill",
  node
);
    