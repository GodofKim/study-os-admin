
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M8.25001 2.34998C7.75295 2.34998 7.35001 2.75292 7.35001 3.24998V3.34998H5.00001C3.81259 3.34998 2.85001 4.31256 2.85001 5.49998V19.5C2.85001 20.6874 3.81259 21.65 5.00001 21.65H19C20.1874 21.65 21.15 20.6874 21.15 19.5V5.49998C21.15 4.31256 20.1874 3.34998 19 3.34998H16.8722V3.24998C16.8722 2.75292 16.4692 2.34998 15.9722 2.34998C15.4751 2.34998 15.0722 2.75292 15.0722 3.24998V3.34998H9.15001V3.24998C9.15001 2.75292 8.74706 2.34998 8.25001 2.34998ZM4.65001 5.49998C4.65001 5.30668 4.80671 5.14998 5.00001 5.14998H7.35001V5.74998C7.35001 6.24703 7.75295 6.64998 8.25001 6.64998C8.74706 6.64998 9.15001 6.24703 9.15001 5.74998V5.14998H15.0722V5.74998C15.0722 6.24703 15.4751 6.64998 15.9722 6.64998C16.4692 6.64998 16.8722 6.24703 16.8722 5.74998V5.14998H19C19.1933 5.14998 19.35 5.30668 19.35 5.49998V8.34998H4.65001V5.49998ZM4.65001 19.5V10.15H19.35V19.5C19.35 19.6933 19.1933 19.85 19 19.85H5.00001C4.80671 19.85 4.65001 19.6933 4.65001 19.5ZM12 12.35C11.3649 12.35 10.85 12.8648 10.85 13.5C10.85 14.1351 11.3649 14.65 12 14.65C12.6351 14.65 13.15 14.1351 13.15 13.5C13.15 12.8648 12.6351 12.35 12 12.35ZM16 12.35C15.3649 12.35 14.85 12.8648 14.85 13.5C14.85 14.1351 15.3649 14.65 16 14.65C16.6351 14.65 17.15 14.1351 17.15 13.5C17.15 12.8648 16.6351 12.35 16 12.35ZM8.00001 12.3501C7.36488 12.3501 6.85001 12.865 6.85001 13.5001C6.85001 14.1353 7.36488 14.6501 8.00001 14.6501C8.63513 14.6501 9.15001 14.1353 9.15001 13.5001C9.15001 12.865 8.63513 12.3501 8.00001 12.3501ZM8.00001 15.85C7.36488 15.85 6.85001 16.3648 6.85001 17C6.85001 17.6351 7.36488 18.15 8.00001 18.15C8.63513 18.15 9.15001 17.6351 9.15001 17C9.15001 16.3648 8.63513 15.85 8.00001 15.85ZM12 15.85C11.3649 15.85 10.85 16.3648 10.85 17C10.85 17.6351 11.3649 18.15 12 18.15C12.6351 18.15 13.15 17.6351 13.15 17C13.15 16.3648 12.6351 15.85 12 15.85ZM16 15.85C15.3649 15.85 14.85 16.3648 14.85 17C14.85 17.6351 15.3649 18.15 16 18.15C16.6351 18.15 17.15 17.6351 17.15 17C17.15 16.3648 16.6351 15.85 16 15.85Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconCalendar = createReactComponent(
  "outline",
  "Icon_Calendar",
  "IconCalendar",
  node
);
    