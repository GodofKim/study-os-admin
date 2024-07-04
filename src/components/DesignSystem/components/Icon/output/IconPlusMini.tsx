
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.98059 11.2459C5.56681 11.2459 5.23138 11.5813 5.23138 11.9951C5.23138 12.4089 5.56681 12.7443 5.98059 12.7443L11.2455 12.7443V18.0092C11.2455 18.423 11.5809 18.7584 11.9947 18.7584C12.4085 18.7584 12.7439 18.423 12.7439 18.0092V12.7443L18.0089 12.7443C18.4226 12.7443 18.7581 12.4089 18.7581 11.9951C18.7581 11.5813 18.4227 11.2459 18.0089 11.2459L12.7439 11.2459V5.98096C12.7439 5.56718 12.4085 5.23175 11.9947 5.23175C11.5809 5.23175 11.2455 5.56718 11.2455 5.98096V11.2459L5.98059 11.2459Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconPlusMini = createReactComponent(
  "outline",
  "Icon_Plus-mini",
  "IconPlusMini",
  node
);
    