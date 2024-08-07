
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5.7619 3.12689C5.26973 2.88154 4.75844 3.0137 4.42014 3.33741C4.08272 3.66028 3.91155 4.17752 4.08522 4.71168L6.44658 11.9746L4.06854 19.2888C3.89892 19.8105 4.05915 20.3193 4.38394 20.644C4.70951 20.9694 5.20613 21.1138 5.69641 20.8966L20.9067 14.1566C22.3311 13.5254 22.373 11.4077 20.9778 10.7122L5.7619 3.12689ZM7.94867 11.0823L6.05105 5.24573L20.2517 12.3249C20.2847 12.3413 20.3052 12.3762 20.3043 12.42C20.3034 12.4639 20.2815 12.4973 20.2485 12.5119L6.0132 18.8199L7.94867 12.8669H13.7021C14.1787 12.8669 14.5499 12.4587 14.5499 11.9746C14.5499 11.4905 14.1787 11.0823 13.7021 11.0823H7.94867Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconPaperplane = createReactComponent(
  "outline",
  "Icon_Paperplane",
  "IconPaperplane",
  node
);
    