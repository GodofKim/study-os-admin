
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12.2783 19.7109C11.3082 21.5254 9.86812 21.3993 9.05522 19.4907C8.69472 18.6442 8.49681 17.408 8.70958 16.5012L9.14412 14.6491H5.75274C3.95438 14.6491 2.6395 12.7517 3.0886 10.8047L4.20153 5.97956C4.60609 4.22563 6.02083 3 7.64084 3L16 3L16 12.7504L12.2783 19.7109Z" fill="#222222"/>
<path d="M19.4344 3C18.6422 3 18 3.64219 18 4.43438L18 11.5656C18 12.3578 18.6422 13 19.4344 13H19.5656C20.3578 13 21 12.3578 21 11.5656V4.43438C21 3.64219 20.3578 3 19.5656 3L19.4344 3Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconHandThumbDownFill = createReactComponent(
  "outline",
  "Icon_Hand-thumb_Down_Fill",
  "IconHandThumbDownFill",
  node
);
    