
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9901 10.2595L20.5796 7.6701C21.1397 7.10995 21.1397 6.20177 20.5796 5.64162L18.358 3.42011C17.7978 2.85996 16.8896 2.85996 16.3295 3.42011L13.6681 6.08138L17.9901 10.2595Z" fill="#222222"/>
<path d="M16.9293 11.3203L12.6073 7.14218L3.20967 16.5395C3.07516 16.674 2.9996 16.8564 2.9996 17.0466L2.9996 20.2824C2.9996 20.6785 3.3207 20.9996 3.7168 20.9996H6.95264C7.14285 20.9996 7.32527 20.924 7.45978 20.7895L16.9293 11.3203Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconPencilFill = createReactComponent(
  "outline",
  "Icon_Pencil_Fill",
  "IconPencilFill",
  node
);
    