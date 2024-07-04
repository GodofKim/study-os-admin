
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M18.5354 3.45018C17.7351 2.64991 16.4376 2.64991 15.6373 3.45018L14.9065 4.18102L14.8834 4.1579L13.664 5.37725L13.6871 5.40037L3.89135 15.1961C3.59544 15.4921 3.39721 15.8715 3.32333 16.2834L2.88303 18.7381C2.63101 20.1432 3.85682 21.369 5.26186 21.117L7.71661 20.6767C8.12852 20.6028 8.50793 20.4045 8.80384 20.1086L20.5498 8.36268C21.3501 7.5624 21.3501 6.2649 20.5498 5.46462L18.5354 3.45018ZM16.8567 4.66953C16.9835 4.54269 17.1892 4.54269 17.316 4.66953L19.3305 6.68398C19.4573 6.81082 19.4573 7.01648 19.3305 7.14332L18.5996 7.87416L16.1258 5.40037L16.8567 4.66953ZM5.1107 16.4155L14.9065 6.61972L17.3803 9.09351L7.58449 18.8893C7.53759 18.9362 7.47745 18.9676 7.41216 18.9793L4.95742 19.4196C4.73472 19.4596 4.54042 19.2653 4.58037 19.0426L5.02067 16.5878C5.03238 16.5225 5.0638 16.4624 5.1107 16.4155Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconPencil = createReactComponent(
  "outline",
  "Icon_Pencil",
  "IconPencil",
  node
);
    