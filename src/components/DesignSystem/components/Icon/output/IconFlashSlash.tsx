
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.836 3.61654L12.1456 10.4533L18.4847 10.4533C18.9164 10.4533 19.1532 10.9058 18.8781 11.2054L15.4312 14.9593L18.8479 19.0186C19.098 19.3158 19.0331 19.7392 18.7029 19.9643C18.3728 20.1894 17.9023 20.131 17.6522 19.8338L5.15222 4.98281C4.9021 4.68564 4.96698 4.26223 5.29715 4.03711C5.62732 3.81198 6.09773 3.87038 6.34786 4.16755L9.55128 7.97348L13.9615 3.17049C14.325 2.77453 15.0266 3.13233 14.836 3.61654Z" fill="#222222"/>
<path d="M7.64395 10.0507L5.12318 12.796C4.84811 13.0956 5.08484 13.5481 5.51663 13.5481L10.697 13.5481L7.64395 10.0507Z" fill="#222222"/>
<path d="M9.16524 20.3849L11.4956 14.4629L13.6358 16.9146L10.0398 20.8309C9.67625 21.2269 8.97469 20.8691 9.16524 20.3849Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconFlashSlash = createReactComponent(
  "outline",
  "Icon_Flash-slash",
  "IconFlashSlash",
  node
);
    