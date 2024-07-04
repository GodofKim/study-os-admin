
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0078 2C8.80486 2 5.95465 3.50875 4.12727 5.85112L3.81633 4.54C3.699 4.04529 3.20287 3.73949 2.70821 3.85701C2.21359 3.97451 1.90774 4.47075 2.02506 4.96541L2.84486 8.42219C2.96218 8.9169 3.45832 9.22269 3.95298 9.10518L7.40681 8.28468C7.90142 8.16717 8.20727 7.67094 8.08996 7.17627C7.97263 6.68156 7.4765 6.37577 6.98183 6.49329L5.73501 6.78949C7.23133 4.98665 9.48614 3.84111 12.0078 3.84111C16.5088 3.84111 20.1589 7.49324 20.1589 12C20.1589 16.5068 16.5088 20.1589 12.0078 20.1589C7.50676 20.1589 3.85664 16.5068 3.85664 12C3.85664 11.4916 3.4445 11.0794 2.93609 11.0794C2.42769 11.0794 2.01555 11.4916 2.01555 12C2.01555 17.5221 6.48848 22 12.0078 22C17.5271 22 22 17.5221 22 12C22 6.47789 17.5271 2 12.0078 2Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M13.6495 9.07755C12.8932 9.07755 12.2704 9.36362 11.8407 9.90674C11.415 10.4449 11.1921 11.2183 11.1921 12.1734C11.1921 13.13 11.4128 13.9035 11.8377 14.4414C12.2666 14.9844 12.8897 15.2692 13.6495 15.2692C14.4071 15.2692 15.0301 14.9866 15.4597 14.4446C15.8852 13.9076 16.1069 13.134 16.1069 12.1734C16.1069 11.2183 15.8841 10.4449 15.4583 9.90674C15.0286 9.36362 14.4058 9.07755 13.6495 9.07755ZM12.7337 12.1734C12.7337 11.5348 12.8376 11.0779 13.005 10.7861C13.1672 10.5034 13.3864 10.3767 13.6495 10.3748C13.9128 10.3767 14.133 10.5036 14.2955 10.7862C14.4634 11.0779 14.5673 11.5356 14.5653 12.1739C14.5673 12.8187 14.4642 13.2739 14.2973 13.5621C14.136 13.8406 13.9165 13.9641 13.6495 13.9641C13.3823 13.9641 13.1618 13.8404 13.0002 13.562C12.8329 13.2739 12.7298 12.8179 12.7337 12.1734Z" fill="#222222"/>
<path d="M10.7589 9.15637H9.42807L7.90113 10.1288V11.5632L9.24097 10.7238V15.1904H10.7589V9.15637Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconGoBackward = createReactComponent(
  "outline",
  "Icon_Go-backward",
  "IconGoBackward",
  node
);
    