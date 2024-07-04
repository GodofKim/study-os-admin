
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.61294 3.4483C5.01519 2.85057 4.04607 2.85057 3.44833 3.4483C2.85058 4.04604 2.85058 5.01517 3.44833 5.61291L9.83543 12L3.44831 18.3871C2.85056 18.9848 2.85056 19.954 3.44831 20.5517C4.04605 21.1494 5.01517 21.1494 5.61292 20.5517L12 14.1646L18.3871 20.5516C18.9848 21.1493 19.954 21.1493 20.5517 20.5516C21.1494 19.9539 21.1494 18.9847 20.5517 18.387L14.1647 12L20.5517 5.613C21.1494 5.01526 21.1494 4.04613 20.5517 3.4484C19.9539 2.85066 18.9848 2.85066 18.3871 3.4484L12 9.83539L5.61294 3.4483Z" fill="#FB2D36"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconXColor = createReactComponent(
  "outline",
  "Icon_X-color",
  "IconXColor",
  node
);
    