
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M10.2006 6.38248C9.78986 6.38248 9.4221 6.63687 9.27723 7.02117L7.81842 10.8911C7.64968 11.3388 7.98048 11.817 8.45885 11.817C8.74953 11.817 9.0085 11.6334 9.10471 11.3591L9.29323 10.8216H11.016L11.1945 11.3305C11.2967 11.6219 11.5719 11.817 11.8806 11.817C12.3888 11.817 12.7402 11.309 12.561 10.8334L11.1239 7.02118C10.979 6.63687 10.6113 6.38248 10.2006 6.38248ZM10.1546 8.34199L10.5681 9.52618H9.74114L10.1546 8.34199Z" fill="#222222"/>
<path d="M14.2674 7.39678C13.9021 7.39678 13.6059 7.69291 13.6059 8.05821V8.49298H13.1868C12.85 8.49298 12.5769 8.76604 12.5769 9.10288C12.5769 9.43971 12.85 9.71278 13.1868 9.71278H13.6059V10.1475C13.6059 10.5128 13.9021 10.809 14.2674 10.809C14.6327 10.809 14.9288 10.5128 14.9288 10.1475V9.71278H15.3479C15.6848 9.71278 15.9578 9.43971 15.9578 9.10288C15.9578 8.76604 15.6848 8.49298 15.3479 8.49298H14.9288V8.05821C14.9288 7.69291 14.6327 7.39678 14.2674 7.39678Z" fill="#222222"/>
<path d="M8.50001 13.875C8.05077 13.875 7.69376 14.2484 7.69376 14.7C7.69376 15.1516 8.05077 15.525 8.50001 15.525H15.5C15.9492 15.525 16.3063 15.1516 16.3063 14.7C16.3063 14.2484 15.9492 13.875 15.5 13.875H8.50001Z" fill="#222222"/>
<path d="M8.50001 16.575C8.05077 16.575 7.69376 16.9484 7.69376 17.4C7.69376 17.8516 8.05077 18.225 8.50001 18.225H12.875C13.3242 18.225 13.6813 17.8516 13.6813 17.4C13.6813 16.9484 13.3242 16.575 12.875 16.575H8.50001Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.75001 2.84998C5.69671 2.84998 4.85001 3.72703 4.85001 4.79998V19.2C4.85001 20.2729 5.69671 21.15 6.75001 21.15H17.25C18.3033 21.15 19.15 20.2729 19.15 19.2V4.79998C19.15 3.72703 18.3033 2.84998 17.25 2.84998H6.75001ZM6.46251 4.79998C6.46251 4.63028 6.59518 4.49998 6.75001 4.49998H17.25C17.4048 4.49998 17.5375 4.63028 17.5375 4.79998V19.2C17.5375 19.3697 17.4048 19.5 17.25 19.5H6.75001C6.59518 19.5 6.46251 19.3697 6.46251 19.2V4.79998Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconPageScore = createReactComponent(
  "outline",
  "Icon_Page-score",
  "IconPageScore",
  node
);
    