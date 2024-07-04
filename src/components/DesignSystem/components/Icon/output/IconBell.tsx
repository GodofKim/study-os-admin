
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M3.32811 17.0244L3.31349 17.0394C3.141 17.1514 3.04472 17.2976 3.01244 17.4633C2.98053 17.627 3.01394 17.795 3.06813 17.9466C3.19117 18.2911 3.55203 18.5102 3.9076 18.5102H19.9128C20.2732 18.5102 20.6097 18.2883 20.9148 18.0036L20.9405 17.9796L20.9523 17.9466C21.0747 17.604 20.9494 17.2663 20.7147 17.0473L20.672 17.0075H20.657C20.6394 16.9924 20.6146 16.9692 20.5832 16.9372C20.5127 16.8653 20.4145 16.7542 20.2978 16.6027C20.0647 16.2999 19.7605 15.8388 19.4585 15.2119C18.8548 13.959 18.2597 12.0433 18.2597 9.40527C18.2597 7.87228 17.6427 6.43172 16.4086 5.37615C15.4659 4.56984 14.3411 4.04458 13.1276 3.84467C13.1299 3.81999 13.1311 3.79504 13.1311 3.76988V3.44839C13.1311 2.90103 12.5983 2.5 11.9999 2.5C11.4015 2.5 10.8688 2.90103 10.8688 3.44839V3.76988C10.8688 3.79549 10.87 3.82087 10.8724 3.84598C9.64098 4.0465 8.47502 4.57057 7.60712 5.38037C6.48178 6.43037 5.7607 7.86684 5.7607 9.40527C5.7607 12.0423 5.14111 13.9576 4.52494 15.2109C4.21671 15.8379 3.90905 16.2997 3.67959 16.6038C3.56486 16.7558 3.46969 16.8683 3.40378 16.9423C3.37083 16.9793 3.3452 17.0066 3.32811 17.0244ZM8.91089 6.61667C9.68234 5.89686 10.8458 5.44317 12.0102 5.44317C13.1686 5.44317 14.235 5.89274 15.1127 6.61958C15.8847 7.34137 16.3641 8.33001 16.3641 9.40527C16.3641 12.9728 17.4512 15.3613 18.2543 16.7274H5.66529C6.46051 15.3585 7.45624 12.9701 7.45624 9.40527C7.45624 8.33125 7.93419 7.34681 8.89855 6.62698L8.90501 6.62215L8.91089 6.61667Z" fill="#222222"/>
<path d="M10.4907 19.1266C10.102 18.7965 9.50323 18.8237 9.15023 19.1893C8.79367 19.5587 8.82463 20.131 9.21712 20.4643C9.68922 20.8653 10.5009 21.3239 11.4864 21.4601C12.5161 21.6025 13.6995 21.3844 14.7827 20.4643C15.1752 20.131 15.2062 19.5587 14.8496 19.1893C14.4966 18.8237 13.8979 18.7965 13.5092 19.1266C12.8755 19.6648 12.2705 19.7504 11.7623 19.6801C11.2098 19.6037 10.7339 19.3331 10.4907 19.1266Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconBell = createReactComponent(
  "outline",
  "Icon_Bell",
  "IconBell",
  node
);
    