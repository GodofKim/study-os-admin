
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10.036 2.24832C9.70543 1.91723 9.1695 1.91723 8.83896 2.24832C8.50841 2.57941 8.50841 3.11621 8.83896 3.4473L9.25771 3.86674H8.5056C5.46494 3.86674 3 6.33573 3 9.38139V10.3148C3 10.783 3.37895 11.1626 3.84642 11.1626C4.31388 11.1626 4.69284 10.783 4.69284 10.3148V9.38139C4.69284 7.27219 6.39987 5.56236 8.5056 5.56236H9.2577L8.83896 5.98179C8.50841 6.31288 8.50841 6.84968 8.83896 7.18077C9.1695 7.51186 9.70542 7.51186 10.036 7.18077L11.8996 5.31404C12.2302 4.98295 12.2302 4.44614 11.8996 4.11505L10.036 2.24832ZM14.6035 7.91133H13.3309H13.3309C12.2535 7.91133 11.4362 7.91133 10.7849 7.96375C10.1306 8.01642 9.63099 8.12272 9.19186 8.3425C8.40113 8.73826 7.76002 9.38042 7.36491 10.1725C7.14549 10.6123 7.03937 11.1127 6.98678 11.7681C6.93445 12.4205 6.93445 13.2391 6.93445 14.3183V14.3183V15.593V15.5931C6.93445 16.6722 6.93445 17.4908 6.98678 18.1432C7.03937 18.7986 7.14549 19.299 7.36491 19.7389C7.76002 20.5309 8.40113 21.1731 9.19186 21.5688C9.63099 21.7886 10.1306 21.8949 10.7849 21.9476C11.4362 22 12.2535 22 13.3309 22H14.6035C15.681 22 16.4982 22 17.1495 21.9476C17.8039 21.8949 18.3035 21.7886 18.7426 21.5688C19.5333 21.1731 20.1744 20.5309 20.5695 19.7389C20.789 19.299 20.8951 18.7986 20.9477 18.1432C21 17.4908 21 16.6722 21 15.593V14.3183C21 13.2391 21 12.4205 20.9477 11.7681C20.8951 11.1127 20.789 10.6123 20.5695 10.1725C20.1744 9.38042 19.5333 8.73826 18.7426 8.3425C18.3035 8.12272 17.8039 8.01642 17.1495 7.96375C16.4982 7.91133 15.681 7.91133 14.6036 7.91133H14.6035ZM10.9268 9.73145C11.492 9.68595 12.2281 9.68473 13.3377 9.68473H14.5967C15.7063 9.68473 16.4424 9.68595 17.0077 9.73145C17.5546 9.77548 17.7996 9.85301 17.9512 9.92889C18.399 10.153 18.762 10.5166 18.9858 10.9651C19.0615 11.117 19.1389 11.3624 19.1829 11.9102C19.2283 12.4764 19.2295 13.2137 19.2295 14.3251V15.5862C19.2295 16.6976 19.2283 17.4349 19.1829 18.0011C19.1389 18.5489 19.0615 18.7944 18.9858 18.9462C18.762 19.3947 18.399 19.7583 17.9512 19.9824C17.7996 20.0583 17.5546 20.1359 17.0077 20.1799C16.4424 20.2254 15.7063 20.2266 14.5967 20.2266H13.3377C12.2281 20.2266 11.492 20.2254 10.9268 20.1799C10.3798 20.1359 10.1348 20.0583 9.98323 19.9824C9.53547 19.7583 9.17243 19.3947 8.94869 18.9462C8.87294 18.7944 8.79553 18.5489 8.75158 18.0011C8.70616 17.4349 8.70494 16.6976 8.70494 15.5862V14.3251C8.70494 13.2137 8.70616 12.4764 8.75158 11.9102C8.79553 11.3624 8.87294 11.117 8.94869 10.9651C9.17243 10.5166 9.53547 10.153 9.98323 9.92889C10.1348 9.85301 10.3798 9.77548 10.9268 9.73145Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconScreenRotateRight = createReactComponent(
  "outline",
  "Icon_Screen-rotate_Right",
  "IconScreenRotateRight",
  node
);
    