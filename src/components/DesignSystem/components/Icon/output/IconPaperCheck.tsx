
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8268 11.2063C15.5189 10.8752 15.0062 10.8632 14.6839 11.1802L11.105 14.7003L9.69347 13.4098C9.35987 13.1048 8.848 13.1363 8.55228 13.4785C8.25869 13.8182 8.28791 14.3374 8.61906 14.6402L10.5878 16.4402C10.9022 16.7277 11.3799 16.7186 11.6837 16.4198L15.8014 12.3698C16.1214 12.0551 16.1325 11.5351 15.8268 11.2063Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.75001 2.84998C5.69671 2.84998 4.85001 3.72703 4.85001 4.79998V19.2C4.85001 20.2729 5.69671 21.15 6.75001 21.15H17.25C18.3033 21.15 19.15 20.2729 19.15 19.2V8.24556C19.15 7.72973 18.9508 7.23421 18.595 6.86821L15.2451 3.42262C14.8891 3.05648 14.4054 2.84998 13.9001 2.84998H6.75001ZM6.46251 4.79998C6.46251 4.63028 6.59518 4.49998 6.75001 4.49998H13.1625V7.52951C13.1625 8.33761 13.8005 8.99998 14.5963 8.99998H17.5375V19.2C17.5375 19.3697 17.4048 19.5 17.25 19.5H6.75001C6.59518 19.5 6.46251 19.3697 6.46251 19.2V4.79998ZM14.775 7.34998V5.27863L16.7888 7.34998H14.775Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconPaperCheck = createReactComponent(
  "outline",
  "Icon_Paper-check",
  "IconPaperCheck",
  node
);
    