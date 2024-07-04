
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12C21 7.02765 16.9724 3 12 3C7.02765 3 3 7.02765 3 12C3 13.6775 3.46391 15.2429 4.26531 16.588L3.49828 19.6624C3.43944 19.8982 3.50859 20.1477 3.68047 20.3195C3.85234 20.4914 4.10175 20.5606 4.33758 20.5017L7.41124 19.7349C8.75234 20.5368 10.3239 21 12 21C16.9724 21 21 16.9724 21 12Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChatBalloonFill = createReactComponent(
  "outline",
  "Icon_Chat-balloon_Fill",
  "IconChatBalloonFill",
  node
);
    