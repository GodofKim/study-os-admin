
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.15 10.4526L14.8421 3.61584C15.0328 3.13163 14.3308 2.77383 13.967 3.16979L5.12291 12.7953C4.84766 13.0949 5.08455 13.5474 5.51661 13.5474L11.8598 13.5474L9.16762 20.3842C8.97695 20.8684 9.67896 21.2262 10.0428 20.8302L18.8869 11.2047C19.1621 10.9051 18.9252 10.4526 18.4931 10.4526L12.15 10.4526Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconFlash = createReactComponent(
  "outline",
  "Icon_Flash",
  "IconFlash",
  node
);
    