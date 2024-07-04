
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10.2321 3.02857C11.0178 1.65714 12.9822 1.65714 13.7679 3.02857L21.7235 16.9143C22.5092 18.2857 21.527 20 19.9556 20H4.04444C2.47297 20 1.49081 18.2857 2.27654 16.9143L10.2321 3.02857ZM10.8877 8.0708C10.8653 7.44091 11.3698 6.91803 12.0001 6.91803C12.6304 6.91803 13.1349 7.44091 13.1124 8.0708L12.9279 13.2358C12.9101 13.7354 12.5 14.1311 12.0001 14.1311C11.5002 14.1311 11.0901 13.7354 11.0722 13.2358L10.8877 8.0708ZM10.8525 15.9344C10.8525 15.3007 11.3663 14.7869 12.0001 14.7869C12.6338 14.7869 13.1476 15.3007 13.1476 15.9344C13.1476 16.5682 12.6338 17.082 12.0001 17.082C11.3663 17.082 10.8525 16.5682 10.8525 15.9344Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconWarningFill = createReactComponent(
  "outline",
  "Icon_Warning_Fill",
  "IconWarningFill",
  node
);
    