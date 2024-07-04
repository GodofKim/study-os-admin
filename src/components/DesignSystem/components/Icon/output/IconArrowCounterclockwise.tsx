
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9407 4C15.445 4 15.0407 4.39924 15.0407 4.89473L15.0407 9.0233C15.0407 9.51879 15.445 9.91804 15.9407 9.91804C16.4364 9.91804 16.8407 9.5188 16.8407 9.02331L16.8407 6.77618C17.58 7.44255 18.1759 8.25822 18.5845 9.17495C19.208 10.5736 19.3628 12.1339 19.0261 13.6263C18.6894 15.1187 17.8791 16.4648 16.7139 17.4663C15.5487 18.4678 14.0903 19.0719 12.5531 19.1894C11.0159 19.3069 9.48135 18.9317 8.17526 18.119C6.8692 17.3064 5.86062 16.0993 5.29762 14.6756C4.73462 13.2519 4.64682 11.6865 5.04709 10.2096C5.44736 8.73275 6.31465 7.4221 7.52167 6.47062C7.91133 6.16345 7.97679 5.59992 7.66683 5.21254C7.35755 4.826 6.79212 4.76195 6.40331 5.06845C4.89445 6.25787 3.80975 7.89672 3.30907 9.74409C2.80839 11.5915 2.91824 13.5496 3.62242 15.3303C4.3266 17.111 5.58783 18.6201 7.2203 19.6359C8.85276 20.6516 10.7704 21.1205 12.6911 20.9736C14.6119 20.8268 16.4346 20.0719 17.8912 18.8199C19.3478 17.5679 20.3613 15.8847 20.7825 14.0179C21.2036 12.1511 21.01 10.1993 20.2302 8.44996C19.7865 7.45454 19.1664 6.55459 18.4058 5.78948L20.0583 5.78948C20.554 5.78948 20.9583 5.39023 20.9583 4.89475C20.9583 4.39925 20.554 4.00001 20.0583 4.00001L15.9407 4Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconArrowCounterclockwise = createReactComponent(
  "outline",
  "Icon_Arrow-counterclockwise",
  "IconArrowCounterclockwise",
  node
);
    