
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12.0002 3C9.12695 3 6.79416 5.29698 6.79416 8.13484C6.79416 10.9727 9.12695 13.2697 12.0002 13.2697C14.8734 13.2697 17.2062 10.9727 17.2062 8.13484C17.2062 5.29698 14.8734 3 12.0002 3ZM8.60679 8.13484C8.60679 6.29021 10.1241 4.79127 12.0002 4.79127C13.8763 4.79127 15.3936 6.29021 15.3936 8.13484C15.3936 9.97948 13.8763 11.4784 12.0002 11.4784C10.1241 11.4784 8.60679 9.97948 8.60679 8.13484ZM12.0002 14.2214C6.67228 14.2214 3.83558 17.8727 3.06539 19.7711C2.87836 20.232 3.10661 20.7532 3.57068 20.9362C4.03373 21.1188 4.56125 20.8976 4.74783 20.4377C5.32639 19.0116 7.6154 16.0127 12.0002 16.0127C16.385 16.0127 18.674 19.0116 19.2525 20.4377C19.4391 20.8976 19.9666 21.1188 20.4297 20.9362C20.8938 20.7532 21.122 20.232 20.935 19.7711C20.1648 17.8727 17.3281 14.2214 12.0002 14.2214Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconUser = createReactComponent(
  "outline",
  "Icon_User",
  "IconUser",
  node
);
    