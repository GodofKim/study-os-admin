
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.30433 9.33531C3.93334 9.65458 3.89586 10.2114 4.22318 10.5761C4.5474 10.9373 5.10593 10.9719 5.47349 10.6556L11.1111 5.804L11.1111 20.1237C11.1111 20.6132 11.5147 21 12 21C12.4853 21 12.8889 20.6132 12.8889 20.1237L12.8889 5.80464L18.5266 10.6556C18.8941 10.9719 19.4527 10.9373 19.7769 10.576C20.1042 10.2113 20.0666 9.65451 19.6956 9.33528L12.584 3.2161C12.2492 2.92795 11.7498 2.92797 11.4149 3.21614L4.30433 9.33531Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconArrowUp = createReactComponent(
  "outline",
  "Icon_Arrow_Up",
  "IconArrowUp",
  node
);
    