
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 20.3333C16.6024 20.3333 20.3333 16.6024 20.3333 12C20.3333 7.39763 16.6024 3.66667 12 3.66667C7.39763 3.66667 3.66667 7.39763 3.66667 12C3.66667 16.6024 7.39763 20.3333 12 20.3333Z" fill="url(#paint0_angular_3230_2461)"/>
<path fillRule="evenodd" clipRule="evenodd" d="M20.9847 10.0006C21.4411 9.9417 21.8589 10.264 21.9178 10.7204C21.9725 11.1448 22 11.5722 22 12C22 12.4603 21.6269 12.8333 21.1667 12.8333C20.7064 12.8333 20.3333 12.4603 20.3333 12C20.3333 11.6435 20.3104 11.2873 20.2648 10.9337C20.2059 10.4773 20.5282 10.0595 20.9847 10.0006Z" fill="#FF5500"/>
<defs>
<radialGradient id="paint0_angular_3230_2461" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 12) scale(10)">
<stop stop-color="#FF5500" stop-opacity="0"/>
<stop offset="0.0001" stop-color="#FF5500" stop-opacity="0"/>
<stop offset="1" stop-color="#FF6800"/>
</radialGradient>
</defs>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconSpinner = createReactComponent(
  "outline",
  "Icon_Spinner",
  "IconSpinner",
  node
);
    