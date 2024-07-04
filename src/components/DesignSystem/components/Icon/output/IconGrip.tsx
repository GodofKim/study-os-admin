
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99382 8C3.45866 8 3 8.39893 3 8.91979C3 9.44064 3.45866 9.83957 3.99382 9.83957H20.0062C20.5413 9.83957 21 9.44064 21 8.91979C21 8.39893 20.5413 8 20.0062 8H3.99382Z" fill="#222222"/>
<path d="M3.99382 14.1604C3.45866 14.1604 3 14.5594 3 15.0802C3 15.6011 3.45866 16 3.99382 16H20.0062C20.5413 16 21 15.6011 21 15.0802C21 14.5594 20.5413 14.1604 20.0062 14.1604H3.99382Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconGrip = createReactComponent(
  "outline",
  "Icon_Grip",
  "IconGrip",
  node
);
    