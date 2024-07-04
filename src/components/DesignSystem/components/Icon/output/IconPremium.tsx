
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="url(#paint0_linear_28_2940)"/>
<path d="M11.3158 13.925V17.9422H8.82544V6.775H13.0318C15.3 6.775 16.8576 8.271 16.8576 10.35C16.8576 12.429 15.3 13.925 13.0318 13.925H11.3158ZM12.7788 11.7844C13.7248 11.7844 14.3694 11.2322 14.3694 10.3654C14.3694 9.4986 13.7248 8.9332 12.7788 8.9332H11.34V11.7932L12.7788 11.7844Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_28_2940" x1="2.55" y1="8.224" x2="21.086" y2="15.63" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6800"/>
<stop offset="0.25" stop-color="#FF6100"/>
<stop offset="0.61" stop-color="#FF4E00"/>
<stop offset="1" stop-color="#FF3200"/>
</linearGradient>
</defs>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconPremium = createReactComponent(
  "outline",
  "Icon_Premium",
  "IconPremium",
  node
);
    