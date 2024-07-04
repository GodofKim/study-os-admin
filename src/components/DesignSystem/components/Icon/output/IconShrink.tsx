
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2295 3C9.71344 3 9.29508 3.41836 9.29508 3.93443V9.29508H3.93443C3.41836 9.29508 3 9.71344 3 10.2295C3 10.7456 3.41836 11.1639 3.93443 11.1639H10.2295C10.7456 11.1639 11.1639 10.7456 11.1639 10.2295V3.93443C11.1639 3.41836 10.7456 3 10.2295 3Z" fill="#222222"/>
<path d="M13.7705 3C13.2544 3 12.8361 3.41836 12.8361 3.93443V10.2295C12.8361 10.7456 13.2544 11.1639 13.7705 11.1639H20.0656C20.5816 11.1639 21 10.7456 21 10.2295C21 9.71344 20.5816 9.29508 20.0656 9.29508H14.7049V3.93443C14.7049 3.41836 14.2866 3 13.7705 3Z" fill="#222222"/>
<path d="M3.93443 12.8361C3.41836 12.8361 3 13.2544 3 13.7705C3 14.2866 3.41836 14.7049 3.93443 14.7049H9.29508V20.0656C9.29508 20.5816 9.71344 21 10.2295 21C10.7456 21 11.1639 20.5816 11.1639 20.0656V13.7705C11.1639 13.2544 10.7456 12.8361 10.2295 12.8361H3.93443Z" fill="#222222"/>
<path d="M13.7705 12.8361C13.2544 12.8361 12.8361 13.2544 12.8361 13.7705V20.0656C12.8361 20.5816 13.2544 21 13.7705 21C14.2866 21 14.7049 20.5816 14.7049 20.0656V14.7049H20.0656C20.5816 14.7049 21 14.2866 21 13.7705C21 13.2544 20.5816 12.8361 20.0656 12.8361H13.7705Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconShrink = createReactComponent(
  "outline",
  "Icon_Shrink",
  "IconShrink",
  node
);
    