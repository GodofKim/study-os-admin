
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3C6.47778 3 2 6.3368 2 10.4518C2 13.0104 3.73333 15.2598 6.36666 16.6031L5.25555 20.5155C5.15555 20.8567 5.56667 21.1338 5.88889 20.9313L10.7444 17.8397C11.1556 17.8717 11.5778 17.893 12 17.893C17.5222 17.893 22 14.5562 22 10.4518C22 6.3368 17.5222 3 12 3Z" fill="#1F1F1F"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconKakao = createReactComponent(
  "outline",
  "Icon_Kakao",
  "IconKakao",
  node
);
    