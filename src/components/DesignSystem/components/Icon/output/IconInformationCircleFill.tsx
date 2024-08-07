
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.1111 7.55556C13.1111 8.16921 12.6136 8.66667 12 8.66667C11.3864 8.66667 10.8889 8.16921 10.8889 7.55556C10.8889 6.94191 11.3864 6.44444 12 6.44444C12.6136 6.44444 13.1111 6.94191 13.1111 7.55556ZM12 10.0556C12.4602 10.0556 12.8333 10.4287 12.8333 10.8889V16.4444C12.8333 16.9047 12.4602 17.2778 12 17.2778C11.5398 17.2778 11.1667 16.9047 11.1667 16.4444V10.8889C11.1667 10.4287 11.5398 10.0556 12 10.0556Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconInformationCircleFill = createReactComponent(
  "outline",
  "Icon_Information-circle_Fill",
  "IconInformationCircleFill",
  node
);
    