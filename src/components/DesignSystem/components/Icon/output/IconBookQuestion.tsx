
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M11.7805 5.8869C9.38734 5.8869 7.60769 7.62207 7.60769 9.98767C7.60769 12.3533 9.38734 14.0884 11.7805 14.0884C12.3322 14.0884 12.854 13.998 13.3225 13.8231L13.8178 14.4504C14.1539 14.876 14.77 14.9516 15.1991 14.62C15.6335 14.2843 15.7114 13.6591 15.3728 13.227L14.9664 12.7085C15.5897 11.9975 15.9534 11.0557 15.9534 9.98767C15.9534 7.62207 14.1738 5.8869 11.7805 5.8869ZM9.57169 9.98767C9.57169 8.64531 10.5139 7.70075 11.7805 7.70075C13.0472 7.70075 13.9894 8.64531 13.9894 9.98767C13.9894 10.4115 13.8928 10.7964 13.7265 11.1231L13.3587 10.6555C13.0207 10.226 12.3995 10.1494 11.9674 10.4841C11.5312 10.822 11.4532 11.4502 11.7934 11.8845L12.0857 12.2574C11.9877 12.2693 11.8861 12.2746 11.7805 12.2746C10.5142 12.2746 9.57169 11.3212 9.57169 9.98767Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.51426 2.84998C5.80718 2.84998 5.12936 3.13358 4.62982 3.63792C4.13033 4.14221 3.84998 4.82587 3.84998 5.53844V18.4615C3.84998 19.1741 4.13033 19.8577 4.62982 20.362C5.12936 20.8664 5.80718 21.15 6.51426 21.15H19.3143C19.7772 21.15 20.15 20.7715 20.15 20.3077C20.15 19.8438 19.7772 19.4654 19.3143 19.4654H6.51426C6.25141 19.4654 5.99902 19.3599 5.81271 19.1718C5.62635 18.9837 5.5214 18.7282 5.5214 18.4615C5.5214 18.1948 5.62635 17.9393 5.81271 17.7512C5.99902 17.5631 6.25141 17.4577 6.51426 17.4577H19.3143C19.7772 17.4577 20.15 17.0792 20.15 16.6154C20.15 16.5705 20.1465 16.5264 20.1397 16.4834C20.1465 16.4403 20.15 16.3962 20.15 16.3514V4.24613C20.15 3.87631 20.0045 3.52135 19.745 3.25941C19.4855 2.99742 19.1333 2.84998 18.7657 2.84998H6.51426ZM5.81271 4.8281C5.99902 4.64 6.25141 4.53459 6.51426 4.53459H18.4785V15.7731H6.51426C6.17073 15.7731 5.83406 15.84 5.5214 15.9667V5.53844C5.5214 5.27174 5.62635 5.01625 5.81271 4.8281Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconBookQuestion = createReactComponent(
  "outline",
  "Icon_Book-question",
  "IconBookQuestion",
  node
);
    