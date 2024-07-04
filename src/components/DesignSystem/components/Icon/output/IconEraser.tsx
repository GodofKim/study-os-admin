
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M15.8966 3.71112C14.7484 2.56293 12.8869 2.56293 11.7387 3.71112L4.56643 10.8834C4.16654 11.2832 3.81014 11.7244 3.50319 12.1993C2.45968 13.814 2.68533 15.9382 4.04477 17.2976L6.70233 19.9552C8.06177 21.3146 10.1859 21.5403 11.8006 20.4968C12.2756 20.1898 12.7167 19.8334 13.1166 19.4335L20.2888 12.2613C21.437 11.1131 21.437 9.2515 20.2888 8.10331L15.8966 3.71112ZM12.9654 4.9379C13.4361 4.46724 14.1992 4.46724 14.6699 4.9379L19.0621 9.33009C19.5327 9.80075 19.5327 10.5638 19.0621 11.0345L14.041 16.0555L7.94441 9.95893L12.9654 4.9379ZM5.79321 12.1101L6.71763 11.1857L12.8142 17.2823L11.8898 18.2067C11.5766 18.52 11.231 18.7992 10.8589 19.0396C9.93102 19.6393 8.71034 19.5096 7.92911 18.7284L5.27155 16.0708C4.49032 15.2896 4.36065 14.0689 4.96032 13.141C5.20077 12.7689 5.47996 12.4234 5.79321 12.1101Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconEraser = createReactComponent(
  "outline",
  "Icon_Eraser",
  "IconEraser",
  node
);
    