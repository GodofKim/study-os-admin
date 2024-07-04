
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6.34973C11.3059 6.34973 10.7432 6.91243 10.7432 7.60656C10.7432 8.30069 11.3059 8.86339 12 8.86339C12.6941 8.86339 13.2568 8.30069 13.2568 7.60656C13.2568 6.91243 12.6941 6.34973 12 6.34973Z" fill="#222222"/>
<path d="M12 9.90164C11.4568 9.90164 11.0164 10.342 11.0164 10.8852V16.3497C11.0164 16.893 11.4568 17.3333 12 17.3333C12.5432 17.3333 12.9836 16.893 12.9836 16.3497V10.8852C12.9836 10.342 12.5432 9.90164 12 9.90164Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM3.96721 12C3.96721 7.56361 7.56361 3.96721 12 3.96721C16.4364 3.96721 20.0328 7.56361 20.0328 12C20.0328 16.4364 16.4364 20.0328 12 20.0328C7.56361 20.0328 3.96721 16.4364 3.96721 12Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconInformationCircle = createReactComponent(
  "outline",
  "Icon_Information-circle",
  "IconInformationCircle",
  node
);
    