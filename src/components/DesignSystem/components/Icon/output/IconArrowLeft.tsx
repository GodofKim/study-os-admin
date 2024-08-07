
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8416 4.22019C10.4688 3.89776 9.90175 3.93341 9.57357 4.30103L3.22492 11.4126C2.92501 11.7486 2.92503 12.2525 3.22496 12.5884L9.57361 19.699C9.90182 20.0666 10.4689 20.1022 10.8416 19.7798C11.2162 19.4558 11.2535 18.8925 10.9237 18.5232L5.89314 12.8889H20.1C20.5942 12.8889 21 12.4937 21 12C21 11.5062 20.5942 11.1111 20.1 11.1111H5.89384L10.9237 5.47676C11.2535 5.10739 11.2161 4.54414 10.8416 4.22019Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconArrowLeft = createReactComponent(
  "outline",
  "Icon_Arrow_Left",
  "IconArrowLeft",
  node
);
    