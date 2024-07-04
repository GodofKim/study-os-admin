
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM13.5699 10.4375C14.0006 10.4375 14.2672 10.6338 14.3023 10.9707H15.1461C15.1344 10.2207 14.5162 9.69922 13.5758 9.69922C12.6471 9.69922 11.9674 10.2119 11.9703 10.9824C11.9703 11.6035 12.4098 11.9609 13.1246 12.1367L13.5875 12.248C14.0504 12.3623 14.3141 12.4971 14.3141 12.7871C14.3141 13.1035 14.0152 13.3203 13.5523 13.3203C13.0836 13.3203 12.7437 13.1035 12.7145 12.6758H11.859C11.8854 13.5869 12.5387 14.0615 13.5641 14.0586C14.5982 14.0615 15.2018 13.5635 15.2047 12.7871C15.2018 12.0811 14.6598 11.7119 13.9332 11.5449L13.5523 11.4512C13.1861 11.3691 12.8697 11.2314 12.8727 10.9238C12.8756 10.6426 13.1246 10.4375 13.5699 10.4375ZM17.1605 11.2168L16.2934 9.75781H15.2914L16.598 11.8789L15.268 14H16.2816L17.1605 12.541H17.1898L18.0688 14H19.0883L17.7641 11.8789L19.059 9.75781H18.0629L17.1898 11.2168H17.1605ZM9.02422 14V9.75781H9.90312V13.2734H11.7312V14H9.02422ZM6.89258 11.2168L6.02539 9.75781H5.02344L6.33008 11.8789L5 14H6.01367L6.89258 12.541H6.92188L7.80078 14H8.82031L7.49609 11.8789L8.79102 9.75781H7.79492L6.92188 11.2168H6.89258Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconXLSX = createReactComponent(
  "outline",
  "Icon_XLSX",
  "IconXLSX",
  node
);
    