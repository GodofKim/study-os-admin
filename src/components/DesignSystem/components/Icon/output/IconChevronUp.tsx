
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9726 15.2451C21.3425 15.5891 21.3425 16.155 20.9726 16.4991C20.613 16.8336 20.037 16.8336 19.6774 16.4991L12 9.35734L4.32257 16.4991C3.963 16.8336 3.387 16.8336 3.02742 16.4991C2.65752 16.155 2.65753 15.5891 3.02743 15.2451L11.3524 7.50086C11.712 7.16638 12.288 7.16638 12.6476 7.50086L20.9726 15.2451Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronUp = createReactComponent(
  "outline",
  "Icon_Chevron_Up",
  "IconChevronUp",
  node
);
    