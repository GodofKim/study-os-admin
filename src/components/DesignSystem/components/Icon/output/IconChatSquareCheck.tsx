
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3532 7.40168C15.9859 7.03852 15.3933 7.04136 15.0295 7.40803L11.0509 11.4185L8.96175 9.36667C8.59325 9.00475 8.00065 9.0096 7.63814 9.3775C7.27564 9.74539 7.28049 10.337 7.64899 10.6989L10.4031 13.4038C10.7708 13.7649 11.3616 13.7611 11.7245 13.3953L16.3595 8.72314C16.7233 8.35647 16.7204 7.76484 16.3532 7.40168Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M4.11823 3C2.94825 3 2 3.94767 2 5.11641V15.9452C2 17.1139 2.94825 18.0616 4.11823 18.0616H9.56469L11.0337 20.459C11.4756 21.1803 12.5244 21.1803 12.9663 20.459L14.4353 18.0616H19.8818C21.0518 18.0616 22 17.1139 22 15.9452V5.11641C22 3.94767 21.0518 3 19.8818 3H4.11823ZM3.7734 5.11641C3.7734 4.92593 3.9279 4.77173 4.11823 4.77173H19.8818C20.0721 4.77173 20.2266 4.92593 20.2266 5.11641V15.9452C20.2266 16.1357 20.0721 16.2899 19.8818 16.2899H13.5244C13.473 16.2899 13.4252 16.3166 13.3984 16.3604L12 18.6426L10.6016 16.3604C10.5748 16.3166 10.527 16.2899 10.4755 16.2899H4.11823C3.9279 16.2899 3.7734 16.1357 3.7734 15.9452V5.11641Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChatSquareCheck = createReactComponent(
  "outline",
  "Icon_Chat-square-check",
  "IconChatSquareCheck",
  node
);
    