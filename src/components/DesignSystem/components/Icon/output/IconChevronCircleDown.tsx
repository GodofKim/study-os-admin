
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.572 11.6539L12.6376 15.5884C12.2854 15.9405 11.7146 15.9405 11.3624 15.5884L7.42802 11.6539C7.07591 11.3018 7.07591 10.7309 7.42802 10.3788C7.78013 10.0267 8.35102 10.0267 8.70313 10.3788L12 13.6757L15.2969 10.3788C15.649 10.0267 16.2199 10.0267 16.572 10.3788C16.9241 10.7309 16.9241 11.3018 16.572 11.6539Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM20.1967 12C20.1967 16.5269 16.5269 20.1967 12 20.1967C7.47307 20.1967 3.80328 16.5269 3.80328 12C3.80328 7.47307 7.47308 3.80328 12 3.80328C16.5269 3.80328 20.1967 7.47308 20.1967 12Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconChevronCircleDown = createReactComponent(
  "outline",
  "Icon_Chevron-circle_Down",
  "IconChevronCircleDown",
  node
);
    