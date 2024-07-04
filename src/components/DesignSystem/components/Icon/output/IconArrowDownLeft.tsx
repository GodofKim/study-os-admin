
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.037 5C19.5036 5 19.074 5.4306 19.074 5.95816V12.6525H6.14974L8.51791 10.0297C8.87277 9.63663 8.84101 9.03171 8.44639 8.67769C8.05077 8.32278 7.44097 8.35495 7.08521 8.74897L3.24663 13.0004C3.07533 13.1901 2.98728 13.4397 3.00149 13.6939C3.0157 13.9481 3.13105 14.1866 3.32257 14.3563L7.16115 17.7574C7.55898 18.1099 8.16857 18.0739 8.52186 17.6778C8.87427 17.2826 8.83879 16.6779 8.44197 16.3263L6.4585 14.5688H20.037C20.5705 14.5688 21 14.1382 21 13.6107V5.95816C21 5.4306 20.5705 5 20.037 5Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconArrowDownLeft = createReactComponent(
  "outline",
  "Icon_Arrow_Down-left",
  "IconArrowDownLeft",
  node
);
    