
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.745 20.9726C14.0891 21.3425 14.655 21.3425 14.9991 20.9726C15.3336 20.613 15.3336 20.037 14.9991 19.6774L7.85734 12L14.9991 4.32257C15.3336 3.963 15.3336 3.387 14.9991 3.02742C14.655 2.65752 14.0891 2.65753 13.7451 3.02743L6.00086 11.3524C5.66638 11.712 5.66638 12.288 6.00086 12.6476L13.745 20.9726Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronLeft = createReactComponent(
  "outline",
  "Icon_Chevron_Left",
  "IconChevronLeft",
  node
);
    