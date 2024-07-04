
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6.91803C11.3697 6.91803 10.8652 7.44091 10.8877 8.0708L11.0721 13.2358C11.09 13.7354 11.5001 14.1311 12 14.1311C12.4999 14.1311 12.91 13.7354 12.9279 13.2358L13.1123 8.0708C13.1348 7.44091 12.6303 6.91803 12 6.91803Z" fill="#222222"/>
<path d="M12 14.7869C11.3662 14.7869 10.8525 15.3007 10.8525 15.9344C10.8525 16.5682 11.3662 17.082 12 17.082C12.6338 17.082 13.1475 16.5682 13.1475 15.9344C13.1475 15.3007 12.6338 14.7869 12 14.7869Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.80328 12C3.80328 7.47308 7.47308 3.80328 12 3.80328C16.5269 3.80328 20.1967 7.47308 20.1967 12C20.1967 16.5269 16.5269 20.1967 12 20.1967C7.47308 20.1967 3.80328 16.5269 3.80328 12Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconExclaminationCircle = createReactComponent(
  "outline",
  "Icon_Exclamination-circle",
  "IconExclaminationCircle",
  node
);
    