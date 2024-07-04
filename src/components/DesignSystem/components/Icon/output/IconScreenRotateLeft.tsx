
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.161 2.24832C14.8305 1.91723 14.2946 1.91723 13.964 2.24832L12.1004 4.11505C11.7698 4.44614 11.7698 4.98295 12.1004 5.31404L13.964 7.18077C14.2946 7.51186 14.8305 7.51186 15.161 7.18077C15.4916 6.84968 15.4916 6.31288 15.161 5.98179L14.7423 5.56236H15.4944C17.6001 5.56236 19.3072 7.27219 19.3072 9.38139V10.3148C19.3072 10.783 19.6861 11.1626 20.1536 11.1626C20.621 11.1626 21 10.783 21 10.3148V9.38139C21 6.33573 18.5351 3.86674 15.4944 3.86674H14.7423L15.161 3.4473C15.4916 3.11621 15.4916 2.57941 15.161 2.24832Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M10.6691 7.91133H9.39646C8.31905 7.91133 7.50178 7.91133 6.85049 7.96375C6.19614 8.01642 5.69655 8.12272 5.25741 8.3425C4.46668 8.73826 3.82557 9.38042 3.43046 10.1725C3.21104 10.6123 3.10492 11.1127 3.05234 11.7681C3 12.4205 3 13.2391 3 14.3183V15.5931C3 16.6722 3 17.4908 3.05234 18.1432C3.10492 18.7986 3.21104 19.299 3.43046 19.7389C3.82557 20.5309 4.46668 21.1731 5.25741 21.5688C5.69655 21.7886 6.19614 21.8949 6.85049 21.9476C7.50179 22 8.31903 22 9.39646 22H10.6691C11.7465 22 12.5638 22 13.2151 21.9476C13.8694 21.8949 14.369 21.7886 14.8081 21.5688C15.5989 21.1731 16.24 20.5309 16.6351 19.7389C16.8545 19.299 16.9606 18.7986 17.0132 18.1432C17.0656 17.4908 17.0656 16.6723 17.0656 15.5931V14.3182C17.0656 13.2391 17.0656 12.4205 17.0132 11.7681C16.9606 11.1127 16.8545 10.6123 16.6351 10.1725C16.24 9.38042 15.5989 8.73826 14.8081 8.3425C14.369 8.12272 13.8694 8.01642 13.2151 7.96375C12.5638 7.91133 11.7465 7.91133 10.6691 7.91133ZM6.99231 9.73145C7.55759 9.68595 8.29369 9.68473 9.40327 9.68473H10.6623C11.7719 9.68473 12.508 9.68595 13.0732 9.73145C13.6202 9.77548 13.8652 9.85301 14.0168 9.92889C14.4645 10.153 14.8276 10.5166 15.0513 10.9651C15.1271 11.117 15.2045 11.3624 15.2484 11.9102C15.2938 12.4764 15.2951 13.2137 15.2951 14.3251V15.5862C15.2951 16.6976 15.2938 17.4349 15.2484 18.0011C15.2045 18.5489 15.1271 18.7944 15.0513 18.9462C14.8276 19.3947 14.4645 19.7583 14.0168 19.9824C13.8652 20.0583 13.6202 20.1359 13.0732 20.1799C12.508 20.2254 11.7719 20.2266 10.6623 20.2266H9.40327C8.29369 20.2266 7.55759 20.2254 6.99231 20.1799C6.4454 20.1359 6.20039 20.0583 6.04878 19.9824C5.60102 19.7583 5.23798 19.3947 5.01425 18.9462C4.93849 18.7944 4.86109 18.5489 4.81714 18.0011C4.77171 17.4349 4.77049 16.6976 4.77049 15.5862V14.3251C4.77049 13.2137 4.77171 12.4764 4.81714 11.9102C4.86109 11.3624 4.93849 11.117 5.01425 10.9651C5.23798 10.5166 5.60102 10.153 6.04878 9.92889C6.20039 9.85301 6.4454 9.77548 6.99231 9.73145Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconScreenRotateLeft = createReactComponent(
  "outline",
  "Icon_Screen-rotate_Left",
  "IconScreenRotateLeft",
  node
);
    