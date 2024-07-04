
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M20.64 12.2057C20.64 11.5675 20.5827 10.9538 20.4764 10.3647H12V13.8461H16.8436C16.635 14.9711 16.0009 15.9243 15.0477 16.5625V18.8207H17.9564C19.6582 17.2538 20.64 14.9466 20.64 12.2057Z" fill="#4285F4"/>
<path fillRule="evenodd" clipRule="evenodd" d="M11.9998 21.0017C14.4298 21.0017 16.467 20.1958 17.9561 18.8212L15.0475 16.563C14.2416 17.103 13.2107 17.4221 11.9998 17.4221C9.65566 17.4221 7.67157 15.8389 6.96385 13.7117H3.95703V16.0435C5.43794 18.9849 8.48157 21.0017 11.9998 21.0017Z" fill="#34A853"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.96409 13.7115C6.78409 13.1715 6.68182 12.5947 6.68182 12.0015C6.68182 11.4084 6.78409 10.8315 6.96409 10.2915V7.95972H3.95727C3.34773 9.17472 3 10.5493 3 12.0015C3 13.4538 3.34773 14.8284 3.95727 16.0434L6.96409 13.7115Z" fill="#FBBC05"/>
<path fillRule="evenodd" clipRule="evenodd" d="M11.9998 6.57954C13.3211 6.57954 14.5075 7.03364 15.4402 7.92545L18.0216 5.34409C16.4629 3.89182 14.4257 3 11.9998 3C8.48158 3 5.43794 5.01682 3.95703 7.95818L6.96385 10.29C7.67158 8.16273 9.65567 6.57954 11.9998 6.57954Z" fill="#EA4335"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconGoolgle = createReactComponent(
  "outline",
  "Icon_Goolgle",
  "IconGoolgle",
  node
);
    