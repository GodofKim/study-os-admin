
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 6.59524C10.7902 6.59524 9.80952 7.57595 9.80952 8.78571C9.80952 9.1539 9.51105 9.45238 9.14286 9.45238C8.77467 9.45238 8.47619 9.1539 8.47619 8.78571C8.47619 6.83957 10.0539 5.2619 12 5.2619C13.9461 5.2619 15.5238 6.83957 15.5238 8.78571C15.5238 10.1625 14.7341 11.3536 13.5861 11.9331C12.9827 12.2376 12.6667 12.6379 12.6667 12.9762V14.2143C12.6667 14.5825 12.3682 14.881 12 14.881C11.6318 14.881 11.3333 14.5825 11.3333 14.2143V12.9762C11.3333 11.8417 12.2739 11.1018 12.9853 10.7428C13.7016 10.3812 14.1905 9.63997 14.1905 8.78571C14.1905 7.57595 13.2098 6.59524 12 6.59524ZM12.0714 18.5714C12.7026 18.5714 13.2143 18.0598 13.2143 17.4286C13.2143 16.7974 12.7026 16.2857 12.0714 16.2857C11.4402 16.2857 10.9286 16.7974 10.9286 17.4286C10.9286 18.0598 11.4402 18.5714 12.0714 18.5714Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconQuestionCircleFill = createReactComponent(
  "outline",
  "Icon_Question-circle_Fill",
  "IconQuestionCircleFill",
  node
);
    