
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12.1285 7.224C11.9776 6.01727 12.7923 3.39207 15.6587 3C15.9904 5.02146 14.3311 7.34466 12.1285 7.224ZM19.2014 8.7184C19.2475 8.76326 19.2938 8.80829 19.3404 8.8534C18.3448 9.60764 17.2887 10.6939 17.4095 12.4137C17.5603 14.1336 18.7069 15.1594 19.8534 15.763C19.8534 16.8189 17.8921 20.1078 15.8103 20.4094C15.2017 20.5007 14.8079 20.3158 14.3697 20.11C13.939 19.9078 13.4654 19.6853 12.7026 19.6853C12.1072 19.6853 11.7145 19.853 11.2991 20.0304C10.8513 20.2216 10.3772 20.424 9.59465 20.4397C7.45236 20.4397 5.15932 15.8837 5.00841 12.5949C4.85758 9.54739 6.75854 7.37485 8.93083 7.13352C10.452 6.96856 11.0158 7.26009 11.4946 7.50762C11.804 7.66761 12.0778 7.80922 12.5517 7.79734C13.1643 7.78306 13.6289 7.58719 14.0948 7.39076C14.6156 7.17121 15.138 6.95097 15.8706 6.98286C17.5049 7.06877 18.3216 7.86293 19.2014 8.7184Z" fill="white"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconApple = createReactComponent(
  "outline",
  "Icon_Apple",
  "IconApple",
  node
);
    