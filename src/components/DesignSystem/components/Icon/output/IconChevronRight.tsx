
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.255 20.9726C9.91085 21.3425 9.34496 21.3425 9.00086 20.9726C8.66638 20.613 8.66638 20.037 9.00086 19.6774L16.1427 12L9.00086 4.32257C8.66638 3.963 8.66638 3.387 9.00086 3.02742C9.34496 2.65752 9.91085 2.65753 10.2549 3.02743L17.9991 11.3524C18.3336 11.712 18.3336 12.288 17.9991 12.6476L10.255 20.9726Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronRight = createReactComponent(
  "outline",
  "Icon_Chevron_Right",
  "IconChevronRight",
  node
);
    