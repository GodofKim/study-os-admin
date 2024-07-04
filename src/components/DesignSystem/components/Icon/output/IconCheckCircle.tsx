
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5816 8.43872C17.2444 8.07225 16.674 8.04849 16.3076 8.38564L10.5101 13.7193L7.69983 11.0751C7.33716 10.7338 6.76654 10.7512 6.42531 11.1139C6.08407 11.4766 6.10144 12.0472 6.46411 12.3884L9.88535 15.6075C10.2297 15.9314 10.7657 15.9345 11.1137 15.6144L17.5285 9.71273C17.895 9.37558 17.9187 8.80518 17.5816 8.43872Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.80328 12C3.80328 7.47308 7.47308 3.80328 12 3.80328C16.5269 3.80328 20.1967 7.47308 20.1967 12C20.1967 16.5269 16.5269 20.1967 12 20.1967C7.47308 20.1967 3.80328 16.5269 3.80328 12Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconCheckCircle = createReactComponent(
  "outline",
  "Icon_Check-circle",
  "IconCheckCircle",
  node
);
    