
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.57381 10.7902C6.90564 10.7902 6.36398 11.3318 6.36398 12C6.36398 12.6682 6.90564 13.2098 7.57381 13.2098C8.24199 13.2098 8.78365 12.6682 8.78365 12C8.78365 11.3318 8.24199 10.7902 7.57381 10.7902Z" fill="#222222"/>
<path d="M12 10.7902C11.3319 10.7902 10.7902 11.3318 10.7902 12C10.7902 12.6682 11.3319 13.2098 12 13.2098C12.6682 13.2098 13.2099 12.6682 13.2099 12C13.2099 11.3318 12.6682 10.7902 12 10.7902Z" fill="#222222"/>
<path d="M16.4263 10.7902C15.7581 10.7902 15.2164 11.3318 15.2164 12C15.2164 12.6682 15.7581 13.2098 16.4263 13.2098C17.0944 13.2098 17.6361 12.6682 17.6361 12C17.6361 11.3318 17.0944 10.7902 16.4263 10.7902Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 13.5334 3.3836 14.9776 4.06018 16.2415L3.32227 19.4392C3.15065 20.1828 3.81716 20.8494 4.56084 20.6777L7.75847 19.9398C9.02238 20.6164 10.4666 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.62295 12C4.62295 7.92577 7.92577 4.62295 12 4.62295C16.0742 4.62295 19.377 7.92577 19.377 12C19.377 16.0742 16.0742 19.377 12 19.377C10.7239 19.377 9.52768 19.0543 8.48395 18.4872L7.99262 18.2202L5.11598 18.884L5.77982 16.0074L5.51285 15.5161C4.9457 14.4723 4.62295 13.2761 4.62295 12Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChatBalloonEllipsis = createReactComponent(
  "outline",
  "Icon_Chat-balloon-ellipsis",
  "IconChatBalloonEllipsis",
  node
);
    