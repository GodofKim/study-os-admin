
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4951 20.9726C17.8391 21.3425 18.405 21.3425 18.7491 20.9726C19.0836 20.613 19.0836 20.037 18.7491 19.6774L11.6073 12L18.7491 4.32257C19.0836 3.963 19.0836 3.387 18.7491 3.02742C18.405 2.65752 17.8391 2.65753 17.4951 3.02743L9.75087 11.3524C9.41638 11.712 9.41638 12.288 9.75087 12.6476L17.4951 20.9726Z" fill="#222222"/>
<path d="M11.995 20.9726C12.3391 21.3425 12.905 21.3425 13.2491 20.9726C13.5836 20.613 13.5836 20.037 13.2491 19.6774L6.10734 12L13.2491 4.32257C13.5836 3.963 13.5836 3.387 13.2491 3.02742C12.905 2.65752 12.3391 2.65753 11.9951 3.02743L4.25086 11.3524C3.91638 11.712 3.91638 12.288 4.25086 12.6476L11.995 20.9726Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronDoubleLeft = createReactComponent(
  "outline",
  "Icon_Chevron-double_Left",
  "IconChevronDoubleLeft",
  node
);
    