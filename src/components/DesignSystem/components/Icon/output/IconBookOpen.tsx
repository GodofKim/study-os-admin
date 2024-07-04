
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M7.43326 4C5.37138 4 3.4409 5.01556 2.30881 6.53559C2.09208 6.82658 2 7.18756 2 7.55039V18.1814C2 18.7719 2.4926 19.1857 3.02746 19.3768C3.56819 19.5701 4.23916 19.572 4.7092 19.2602C5.54026 18.7089 6.47243 18.3538 7.43326 18.3538C8.8074 18.3538 10.073 18.879 11.0715 19.6818C11.5993 20.1061 12.4007 20.1061 12.9285 19.6818C13.927 18.879 15.1926 18.3538 16.5667 18.3538C17.5276 18.3538 18.4597 18.7089 19.2908 19.2602C19.7608 19.572 20.4318 19.5701 20.9725 19.3768C21.5074 19.1857 22 18.7719 22 18.1814V7.55039C22 7.18756 21.9079 6.82658 21.6912 6.53559C20.5591 5.01556 18.6286 4 16.5667 4C15.2328 4 13.9971 4.41081 12.9895 5.1094C12.6284 5.35971 12.2966 5.647 12 5.96563C11.7034 5.647 11.3716 5.35971 11.0105 5.1094C10.0029 4.41081 8.76723 4 7.43326 4ZM3.80328 17.7423V7.50927C4.5921 6.46026 5.95171 5.75023 7.43326 5.75023C8.76311 5.75023 9.95121 6.32483 10.7481 7.23461L11.0983 7.63437V17.5754C10.0304 16.9785 8.78344 16.6036 7.43326 16.6036C6.06163 16.6036 4.82089 17.09 3.80328 17.7423ZM13.2519 7.23461C14.0488 6.32484 15.2369 5.75023 16.5667 5.75023C18.0483 5.75023 19.4079 6.46026 20.1967 7.50927V17.7423C19.1791 17.09 17.9384 16.6036 16.5667 16.6036C15.2165 16.6036 13.9695 16.9786 12.9016 17.5755V7.63451L13.2519 7.23461Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconBookOpen = createReactComponent(
  "outline",
  "Icon_Book-open",
  "IconBookOpen",
  node
);
    