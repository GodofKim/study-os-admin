
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7467 4.25331C19.4089 3.91556 18.8613 3.91556 18.5236 4.25331L12 10.7769L5.47642 4.25331C5.13867 3.91556 4.59106 3.91556 4.25331 4.25331C3.91556 4.59106 3.91556 5.13867 4.25331 5.47642L10.7769 12L4.25331 18.5236C3.91556 18.8613 3.91556 19.4089 4.25331 19.7467C4.59106 20.0844 5.13867 20.0844 5.47642 19.7467L12 13.2231L18.5236 19.7467C18.8613 20.0844 19.4089 20.0844 19.7467 19.7467C20.0844 19.4089 20.0844 18.8613 19.7467 18.5236L13.2231 12L19.7467 5.47642C20.0844 5.13867 20.0844 4.59106 19.7467 4.25331Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconX = createReactComponent(
  "outline",
  "Icon_X",
  "IconX",
  node
);
    