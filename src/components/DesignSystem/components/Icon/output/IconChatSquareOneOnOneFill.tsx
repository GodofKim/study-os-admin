
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M4.22222 3C2.99492 3 2 4.01093 2 5.25797V15.4056C2 16.6526 2.99492 17.6636 4.22222 17.6636H9.39796L11.0477 20.4526C11.4794 21.1825 12.5206 21.1825 12.9523 20.4526L14.602 17.6636H19.7778C21.0051 17.6636 22 16.6526 22 15.4056V5.25797C22 4.01093 21.0051 3 19.7778 3H4.22222ZM6.80701 9.2286C6.56095 9.41484 6.51007 9.7685 6.69336 10.0185C6.87665 10.2685 7.22471 10.3202 7.47077 10.134L7.97222 9.75445V12.1342C7.97222 12.446 8.22095 12.6987 8.52778 12.6987C8.8346 12.6987 9.08333 12.446 9.08333 12.1342V8.63005C9.08333 8.41657 8.96481 8.22135 8.77704 8.12557C8.58927 8.02978 8.36439 8.04982 8.1959 8.17735L6.80701 9.2286ZM12.6944 8.98047C12.6944 9.36753 12.3835 9.6813 12 9.6813C11.6165 9.6813 11.3056 9.36753 11.3056 8.98047C11.3056 8.59341 11.6165 8.27963 12 8.27963C12.3835 8.27963 12.6944 8.59341 12.6944 8.98047ZM12.6944 11.7838C12.6944 12.1709 12.3835 12.4846 12 12.4846C11.6165 12.4846 11.3056 12.1709 11.3056 11.7838C11.3056 11.3967 11.6165 11.083 12 11.083C12.3835 11.083 12.6944 11.3967 12.6944 11.7838ZM14.3322 10.0185C14.149 9.7685 14.1998 9.41485 14.4459 9.2286L15.8348 8.17735C16.0033 8.04982 16.2282 8.02978 16.4159 8.12557C16.6037 8.22135 16.7222 8.41657 16.7222 8.63005V12.1342C16.7222 12.446 16.4735 12.6987 16.1667 12.6987C15.8598 12.6987 15.6111 12.446 15.6111 12.1342V9.75445L15.1097 10.134C14.8636 10.3202 14.5155 10.2685 14.3322 10.0185Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChatSquareOneOnOneFill = createReactComponent(
  "outline",
  "Icon_Chat-square-one-on-one_Fill",
  "IconChatSquareOneOnOneFill",
  node
);
    