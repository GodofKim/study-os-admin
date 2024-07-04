
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.50495 20.9726C6.16086 21.3425 5.59496 21.3425 5.25086 20.9726C4.91638 20.613 4.91638 20.037 5.25086 19.6774L12.3927 12L5.25086 4.32257C4.91638 3.963 4.91638 3.387 5.25086 3.02742C5.59496 2.65752 6.16086 2.65753 6.50495 3.02743L14.2491 11.3524C14.5836 11.712 14.5836 12.288 14.2491 12.6476L6.50495 20.9726Z" fill="#222222"/>
<path d="M12.005 20.9726C11.6609 21.3425 11.095 21.3425 10.7509 20.9726C10.4164 20.613 10.4164 20.037 10.7509 19.6774L17.8927 12L10.7509 4.32257C10.4164 3.963 10.4164 3.387 10.7509 3.02742C11.095 2.65752 11.6609 2.65753 12.005 3.02743L19.7491 11.3524C20.0836 11.712 20.0836 12.288 19.7491 12.6476L12.005 20.9726Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronDoubleRight = createReactComponent(
  "outline",
  "Icon_Chevron-double_Right",
  "IconChevronDoubleRight",
  node
);
    