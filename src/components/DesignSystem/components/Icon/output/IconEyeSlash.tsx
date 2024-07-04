
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M19.5303 18.4697C19.8232 18.7626 19.8232 19.2374 19.5303 19.5303C19.2374 19.8232 18.7626 19.8232 18.4697 19.5303L4.46967 5.53033C4.17678 5.23744 4.17678 4.76256 4.46967 4.46967C4.76256 4.17678 5.23744 4.17678 5.53033 4.46967L8.00366 6.943C9.13655 6.37745 10.4672 6 12.0012 6C17.0603 6 19.9076 10.1055 20.7405 11.5244C20.9152 11.8219 20.9152 12.1781 20.7405 12.4755C20.2661 13.2837 19.1382 14.9634 17.3204 16.2597L19.5303 18.4697ZM16.0259 14.9653L14.5843 13.5236C14.848 13.077 14.9994 12.5562 14.9994 12C14.9994 10.3431 13.6563 9 11.9994 9C11.4432 9 10.9224 9.15136 10.4758 9.41514L9.03444 7.97378C9.86407 7.36174 10.8896 7 11.9997 7C14.7611 7 16.9997 9.23858 16.9997 12C16.9997 13.1101 16.638 14.1356 16.0259 14.9653Z" fill="#222222"/>
<path d="M12.0012 18C12.9662 18 13.8508 17.8506 14.6562 17.599L13.7444 16.6872C13.2012 16.8895 12.6134 17 11.9997 17C9.23828 17 6.9997 14.7614 6.9997 12C6.9997 11.3863 7.11025 10.7985 7.31252 10.2553L5.64081 8.58362C4.42455 9.69467 3.63728 10.8834 3.26093 11.5243C3.0862 11.8218 3.0862 12.1782 3.26093 12.4757C4.09426 13.8947 6.94227 18 12.0012 18Z" fill="#222222"/>
<path d="M11.9994 15C12.0185 15 12.0376 14.9998 12.0567 14.9995L8.99994 11.9427C8.99958 11.9618 8.9994 11.9809 8.9994 12C8.9994 13.6569 10.3425 15 11.9994 15Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconEyeSlash = createReactComponent(
  "outline",
  "Icon_Eye-slash",
  "IconEyeSlash",
  node
);
    