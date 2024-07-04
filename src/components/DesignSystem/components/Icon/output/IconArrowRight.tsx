
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6647 4.30433C14.3454 3.93334 13.7886 3.89586 13.4239 4.22318C13.0627 4.5474 13.0281 5.10593 13.3444 5.47349L18.196 11.1111H3.87626C3.38676 11.1111 3 11.5147 3 12C3 12.4853 3.38676 12.8889 3.87626 12.8889H18.1954L13.3444 18.5266C13.0281 18.8941 13.0627 19.4527 13.424 19.7769C13.7887 20.1042 14.3455 20.0666 14.6647 19.6956L20.7839 12.584C21.072 12.2492 21.072 11.7498 20.7839 11.4149L14.6647 4.30433Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconArrowRight = createReactComponent(
  "outline",
  "Icon_Arrow_Right",
  "IconArrowRight",
  node
);
    