
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6957 14.6647C20.0667 14.3454 20.1041 13.7886 19.7768 13.4239C19.4526 13.0627 18.8941 13.0281 18.5265 13.3444L12.8889 18.196L12.8889 3.87626C12.8889 3.38676 12.4853 3 12 3C11.5147 3 11.1111 3.38676 11.1111 3.87626L11.1111 18.1954L5.47344 13.3444C5.10587 13.0281 4.54734 13.0627 4.22314 13.4239C3.89584 13.7887 3.93336 14.3455 4.30437 14.6647L11.416 20.7839C11.7508 21.072 12.2502 21.072 12.5851 20.7839L19.6957 14.6647Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconArrowDown = createReactComponent(
  "outline",
  "Icon_Arrow_Down",
  "IconArrowDown",
  node
);
    