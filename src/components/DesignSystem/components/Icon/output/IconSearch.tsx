
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10.5662 3C6.38547 3 3 6.42025 3 10.6348C3 14.8494 6.38547 18.2696 10.5662 18.2696C12.3307 18.2696 13.9545 17.6599 15.2412 16.6383L19.4428 20.7393C19.8076 21.0953 20.39 21.0854 20.7426 20.7174C21.0941 20.3505 21.0844 19.7663 20.7209 19.4115L16.5357 15.3265C17.5363 14.0319 18.1324 12.4032 18.1324 10.6348C18.1324 6.42025 14.7469 3 10.5662 3ZM4.83634 10.6348C4.83634 7.43749 7.40369 4.84921 10.5662 4.84921C13.7287 4.84921 16.296 7.43749 16.296 10.6348C16.296 13.8321 13.7287 16.4204 10.5662 16.4204C7.40369 16.4204 4.83634 13.8321 4.83634 10.6348Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconSearch = createReactComponent(
  "outline",
  "Icon_Search",
  "IconSearch",
  node
);
    