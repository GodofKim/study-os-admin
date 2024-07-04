
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4726 17.4951C21.8425 17.8391 21.8425 18.405 21.4726 18.7491C21.113 19.0836 20.537 19.0836 20.1774 18.7491L12.5 11.6073L4.82257 18.7491C4.463 19.0836 3.887 19.0836 3.52742 18.7491C3.15752 18.405 3.15753 17.8391 3.52743 17.4951L11.8524 9.75087C12.212 9.41638 12.788 9.41638 13.1476 9.75087L21.4726 17.4951Z" fill="#222222"/>
<path d="M21.4726 11.995C21.8425 12.3391 21.8425 12.905 21.4726 13.2491C21.113 13.5836 20.537 13.5836 20.1774 13.2491L12.5 6.10734L4.82257 13.2491C4.463 13.5836 3.887 13.5836 3.52742 13.2491C3.15752 12.905 3.15753 12.3391 3.52743 11.9951L11.8524 4.25086C12.212 3.91638 12.788 3.91638 13.1476 4.25086L21.4726 11.995Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronDoubleUp = createReactComponent(
  "outline",
  "Icon_Chevron-double_Up",
  "IconChevronDoubleUp",
  node
);
    