
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M11.3636 3.2636C11.7151 2.91213 12.2849 2.91213 12.6364 3.2636L16.6864 7.3136C17.0379 7.66508 17.0379 8.23492 16.6864 8.5864C16.3349 8.93787 15.7651 8.93787 15.4136 8.5864L12.9 6.07279V16.05C12.9 16.5471 12.4971 16.95 12 16.95C11.5029 16.95 11.1 16.5471 11.1 16.05V6.07279L8.5864 8.5864C8.23492 8.93787 7.66508 8.93787 7.3136 8.5864C6.96213 8.23492 6.96213 7.66508 7.3136 7.3136L11.3636 3.2636ZM3.9 15.15C4.39706 15.15 4.8 15.5529 4.8 16.05V18.075C4.8 18.3734 4.91853 18.6595 5.1295 18.8705C5.34048 19.0815 5.62663 19.2 5.925 19.2H18.075C18.3734 19.2 18.6595 19.0815 18.8705 18.8705C19.0815 18.6595 19.2 18.3734 19.2 18.075V16.05C19.2 15.5529 19.6029 15.15 20.1 15.15C20.5971 15.15 21 15.5529 21 16.05V18.075C21 18.8508 20.6918 19.5947 20.1433 20.1433C19.5947 20.6918 18.8508 21 18.075 21H5.925C5.14924 21 4.40526 20.6918 3.85671 20.1433C3.30817 19.5947 3 18.8508 3 18.075V16.05C3 15.5529 3.40294 15.15 3.9 15.15Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconArrowTrayUp = createReactComponent(
  "outline",
  "Icon_Arrow-tray_Up",
  "IconArrowTrayUp",
  node
);
    