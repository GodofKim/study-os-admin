
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M4 20C3.45001 20 2.97919 19.8042 2.58752 19.4125C2.19586 19.0208 2 18.55 2 18V6C2 5.45001 2.19586 4.97916 2.58752 4.58749C2.97919 4.19583 3.45001 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.58749C21.8041 4.97916 22 5.45001 22 6V18C22 18.55 21.8041 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM4.51019 7.13693C4.08868 6.87347 3.53345 7.00162 3.26996 7.42313C3.00653 7.84464 3.1347 8.39987 3.55615 8.66333L11.5562 13.6633C11.848 13.8457 12.2183 13.8457 12.5102 13.6633L20.5102 8.66333C20.9317 8.39987 21.0598 7.84464 20.7964 7.42313C20.533 7.00162 19.9777 6.87347 19.5562 7.13693L12.0332 11.8388L4.51019 7.13693Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconEnvelopeFill = createReactComponent(
  "outline",
  "Icon_Envelope_Fill",
  "IconEnvelopeFill",
  node
);
    