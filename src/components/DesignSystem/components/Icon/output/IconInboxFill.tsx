
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M8.39152 3C6.53824 3 4.91753 4.2485 4.44466 6.04044L3.13511 11.0029C3.04541 11.3429 3 11.6929 3 12.0445V16.918C3 19.1724 4.82756 21 7.08197 21H16.918C19.1724 21 21 19.1724 21 16.918V12.0445C21 11.6929 20.9546 11.3429 20.8649 11.0029L19.5553 6.04044C19.0825 4.2485 17.4618 3 15.6085 3H8.39152ZM6.15655 6.49218C6.42432 5.47747 7.34207 4.77049 8.39152 4.77049H15.6085C16.6579 4.77049 17.5757 5.47747 17.8434 6.49218L19.0633 11.1148H14.9508C14.6924 11.1148 14.4469 11.2277 14.2787 11.4239L13.5683 12.2527C12.7439 13.2144 11.2561 13.2144 10.4317 12.2527L9.72131 11.4239C9.55313 11.2277 9.30761 11.1148 9.04918 11.1148H4.93671L6.15655 6.49218Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconInboxFill = createReactComponent(
  "outline",
  "Icon_Inbox_Fill",
  "IconInboxFill",
  node
);
    