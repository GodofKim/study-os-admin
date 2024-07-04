
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6.97229C10.3785 6.97229 8.96417 8.21223 8.96417 9.86061C8.96417 10.315 9.33253 10.6834 9.78692 10.6834C10.2413 10.6834 10.6097 10.315 10.6097 9.86061C10.6097 9.22547 11.1791 8.61778 12 8.61778C12.8209 8.61778 13.3904 9.22547 13.3904 9.86061C13.3904 10.2168 13.2214 10.5509 12.9245 10.788C12.5924 11.0531 12.1687 11.3989 11.831 11.812C11.4892 12.2303 11.1773 12.7874 11.1773 13.4758V13.9918C11.1773 14.4461 11.5456 14.8145 12 14.8145C12.4544 14.8145 12.8228 14.4461 12.8228 13.9918V13.4758C12.8228 13.3081 12.8956 13.1097 13.1051 12.8533C13.3191 12.5916 13.6141 12.3429 13.9511 12.074C14.603 11.5535 15.0359 10.7617 15.0359 9.86061C15.0359 8.21223 13.6216 6.97229 12 6.97229Z" fill="#222222"/>
<path d="M12.0001 15.3935C11.4297 15.3935 10.9674 15.8559 10.9674 16.4263C10.9674 16.9967 11.4297 17.4591 12.0001 17.4591C12.5705 17.4591 13.0329 16.9967 13.0329 16.4263C13.0329 15.8559 12.5705 15.3935 12.0001 15.3935Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 13.5334 3.3836 14.9776 4.06018 16.2415L3.32227 19.4392C3.15065 20.1828 3.81716 20.8494 4.56084 20.6777L7.75847 19.9398C9.02238 20.6164 10.4666 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.62295 12C4.62295 7.92577 7.92577 4.62295 12 4.62295C16.0742 4.62295 19.377 7.92577 19.377 12C19.377 16.0742 16.0742 19.377 12 19.377C10.7239 19.377 9.52768 19.0543 8.48395 18.4872L7.99262 18.2202L5.11598 18.884L5.77982 16.0074L5.51285 15.5161C4.9457 14.4723 4.62295 13.2761 4.62295 12Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChatBalloonQuestion = createReactComponent(
  "outline",
  "Icon_Chat-balloon-question",
  "IconChatBalloonQuestion",
  node
);
    