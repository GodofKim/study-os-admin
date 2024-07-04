
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5.18919 3C3.98013 3 3 3.98013 3 5.18919V18.8108C3 20.0199 3.98013 21 5.18919 21H18.8108C20.0199 21 21 20.0199 21 18.8108V5.18919C21 3.98013 20.0199 3 18.8108 3H5.18919ZM14.3189 8.80541C14.3189 7.79338 15.1393 6.97297 16.1514 6.97297C17.1634 6.97297 17.9838 7.79338 17.9838 8.80541C17.9838 9.81743 17.1634 10.6378 16.1514 10.6378C15.1393 10.6378 14.3189 9.81743 14.3189 8.80541ZM7.92348 12.6307C8.1866 12.4005 8.57604 12.3892 8.85202 12.6039L13.0171 15.8434L16.2689 13.9852C16.5088 13.8481 16.8057 13.8583 17.0357 14.0116L19.4322 15.6093C19.4999 15.6544 19.5405 15.7304 19.5405 15.8117V18.7297C19.5405 19.1327 19.2138 19.4595 18.8108 19.4595H5.18919C4.78617 19.4595 4.45946 19.1327 4.45946 18.7297V15.7721C4.45946 15.702 4.48974 15.6352 4.54253 15.589L7.92348 12.6307Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconImageFill = createReactComponent(
  "outline",
  "Icon_Image_Fill",
  "IconImageFill",
  node
);
    