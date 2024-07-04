
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12 2.8501C9.15573 2.8501 6.85 5.15583 6.85 8.0001C6.85 10.8444 9.15573 13.1501 12 13.1501C14.8443 13.1501 17.15 10.8444 17.15 8.0001C17.15 5.15583 14.8443 2.8501 12 2.8501ZM8.65 8.0001C8.65 6.14994 10.1498 4.6501 12 4.6501C13.8502 4.6501 15.35 6.14994 15.35 8.0001C15.35 9.85025 13.8502 11.3501 12 11.3501C10.1498 11.3501 8.65 9.85025 8.65 8.0001Z" fill="#222222"/>
<path d="M15.3911 14.1124C15.0385 13.7627 14.4674 13.7627 14.1149 14.1124C13.7617 14.4628 13.7617 15.0314 14.1149 15.3818L15.7469 17.0008L14.115 18.6197C13.7618 18.9701 13.7618 19.5387 14.115 19.8891C14.4675 20.2389 15.0386 20.2389 15.3912 19.8891L17.0247 18.2685L18.6111 19.8423C18.9636 20.192 19.5347 20.192 19.8872 19.8423C20.2404 19.4919 20.2404 18.9233 19.8872 18.5729L18.3026 17.0008L19.8873 15.4287C20.2405 15.0783 20.2405 14.5097 19.8873 14.1593C19.5348 13.8095 18.9637 13.8095 18.6112 14.1593L17.0247 15.7331L15.3911 14.1124Z" fill="#222222"/>
<path d="M12.0896 14.1046C9.32014 13.8276 7.20914 14.7572 5.73311 15.9989C4.28395 17.218 3.43732 18.7436 3.13796 19.7415C2.99513 20.2176 3.26529 20.7193 3.74139 20.8621C4.21748 21.005 4.71921 20.7348 4.86204 20.2587C5.06268 19.5899 5.71604 18.3655 6.89188 17.3763C8.04081 16.4097 9.6798 15.6726 11.9104 15.8956C12.405 15.9451 12.8461 15.5842 12.8955 15.0897C12.945 14.5951 12.5841 14.154 12.0896 14.1046Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconUserX = createReactComponent(
  "outline",
  "Icon_User-x",
  "IconUserX",
  node
);
    