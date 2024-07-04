
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M13.0386 3.70093C12.637 2.76636 11.363 2.76636 10.9614 3.70092L8.97619 8.32094C8.94801 8.38653 8.89086 8.42754 8.82958 8.43446L4.01573 8.97814C3.02995 9.08948 2.65487 10.3539 3.37332 11.0337L6.95888 14.4261C7.00813 14.4727 7.0319 14.5456 7.01745 14.6178L6.02494 19.5676C5.8277 20.5513 6.83897 21.3566 7.70599 20.8374L11.912 18.3185C11.9668 18.2857 12.0332 18.2857 12.088 18.3185L16.294 20.8374C17.161 21.3566 18.1723 20.5513 17.9751 19.5676L16.9826 14.6178C16.9681 14.5456 16.9919 14.4727 17.0411 14.4261L20.6267 11.0337C21.3451 10.3539 20.9701 9.08948 19.9843 8.97814L15.1704 8.43446C15.1091 8.42754 15.052 8.38653 15.0238 8.32094L13.0386 3.70093ZM10.4513 9.0054L12 5.40136L13.5487 9.0054C13.809 9.61124 14.3583 10.0312 14.9958 10.1032L18.7611 10.5284L15.9534 13.1849C15.4794 13.6334 15.2705 14.3095 15.401 14.9602L16.1769 18.8298L12.8948 16.8642C12.3407 16.5324 11.6593 16.5324 11.1052 16.8642L7.82309 18.8298L8.59898 14.9602C8.72946 14.3095 8.52058 13.6334 8.04663 13.1849L5.23888 10.5284L9.00421 10.1032C9.64166 10.0312 10.191 9.61124 10.4513 9.0054Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconStar = createReactComponent(
  "outline",
  "Icon_Star",
  "IconStar",
  node
);
    