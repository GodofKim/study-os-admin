
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4726 6.50495C21.8425 6.16086 21.8425 5.59496 21.4726 5.25086C21.113 4.91638 20.537 4.91638 20.1774 5.25086L12.5 12.3927L4.82257 5.25086C4.463 4.91638 3.887 4.91638 3.52742 5.25086C3.15752 5.59496 3.15753 6.16086 3.52743 6.50495L11.8524 14.2491C12.212 14.5836 12.788 14.5836 13.1476 14.2491L21.4726 6.50495Z" fill="#222222"/>
<path d="M21.4726 12.005C21.8425 11.6609 21.8425 11.095 21.4726 10.7509C21.113 10.4164 20.537 10.4164 20.1774 10.7509L12.5 17.8927L4.82257 10.7509C4.463 10.4164 3.887 10.4164 3.52742 10.7509C3.15752 11.095 3.15753 11.6609 3.52743 12.005L11.8524 19.7491C12.212 20.0836 12.788 20.0836 13.1476 19.7491L21.4726 12.005Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronDoubleDown = createReactComponent(
  "outline",
  "Icon_Chevron-double_Down",
  "IconChevronDoubleDown",
  node
);
    