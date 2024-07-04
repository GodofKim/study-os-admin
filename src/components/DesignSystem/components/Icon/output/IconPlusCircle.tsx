
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0001 5.93443C11.5022 5.93443 11.0985 6.3381 11.0985 6.83607V11.0984L6.83607 11.0984C6.33811 11.0984 5.93443 11.502 5.93443 12C5.93443 12.498 6.3381 12.9016 6.83606 12.9016L11.0985 12.9017V17.1639C11.0985 17.6619 11.5022 18.0656 12.0001 18.0656C12.4981 18.0656 12.9018 17.6619 12.9018 17.1639V12.9017L17.1639 12.9017C17.6619 12.9017 18.0656 12.498 18.0656 12C18.0656 11.5021 17.6619 11.0984 17.1639 11.0984L12.9018 11.0984V6.83607C12.9018 6.3381 12.4981 5.93443 12.0001 5.93443Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.80328 12C3.80328 7.47308 7.47308 3.80328 12 3.80328C16.5269 3.80328 20.1967 7.47308 20.1967 12C20.1967 16.5269 16.5269 20.1967 12 20.1967C7.47308 20.1967 3.80328 16.5269 3.80328 12Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconPlusCircle = createReactComponent(
  "outline",
  "Icon_Plus-circle",
  "IconPlusCircle",
  node
);
    