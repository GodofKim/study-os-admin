
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9344 9.38462C15.4408 9.38462 15.0328 9.78407 15.0328 10.2867V13.7133C15.0328 14.2159 15.4408 14.6154 15.9344 14.6154C16.428 14.6154 16.8361 14.2159 16.8361 13.7133V10.2867C16.8361 9.78407 16.428 9.38462 15.9344 9.38462Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M3.76515 4C2.79739 4 2 4.76935 2 5.73427V9.31469C2 9.81982 2.22483 10.2264 2.47976 10.5172C2.73123 10.804 3.04295 11.0167 3.32211 11.1662C3.62909 11.3306 3.82997 11.6449 3.82997 12C3.82997 12.3551 3.62909 12.6694 3.32211 12.8338C3.04295 12.9833 2.73123 13.196 2.47976 13.4828C2.22483 13.7736 2 14.1802 2 14.6853V18.2657C2 19.2307 2.79739 20 3.76515 20H20.2348C21.2026 20 22 19.2307 22 18.2657V14.6853C22 14.1802 21.7752 13.7736 21.5202 13.4828C21.2688 13.196 20.9571 12.9833 20.6779 12.8338C20.3709 12.6694 20.17 12.3551 20.17 12C20.17 11.6449 20.3709 11.3306 20.6779 11.1662C20.9571 11.0167 21.2688 10.804 21.5202 10.5172C21.7752 10.2264 22 9.81982 22 9.31469V5.73427C22 4.76935 21.2026 4 20.2348 4H3.76515ZM3.70034 5.73427C3.70034 5.71048 3.72226 5.67832 3.76515 5.67832H15.0328V6.86014C15.0328 7.36278 15.4408 7.76224 15.9344 7.76224C16.428 7.76224 16.8361 7.36278 16.8361 6.86014V5.67832H20.2348C20.2777 5.67832 20.2997 5.71048 20.2997 5.73427V9.31469C20.2997 9.31242 20.3 9.31238 20.2997 9.31469C20.2986 9.32233 20.2898 9.3557 20.2344 9.41888C20.158 9.50607 20.031 9.60315 19.8669 9.69103C19.0389 10.1345 18.4697 10.9995 18.4697 12C18.4697 13.0005 19.0389 13.8655 19.8669 14.309C20.031 14.3968 20.158 14.4939 20.2344 14.5811C20.2898 14.6443 20.2986 14.6777 20.2997 14.6853C20.2999 14.6865 20.2999 14.6871 20.2998 14.687L20.2997 14.6853L20.2997 18.2657C20.2997 18.2895 20.2777 18.3217 20.2348 18.3217H16.8361V17.1399C16.8361 16.6372 16.428 16.2378 15.9344 16.2378C15.4408 16.2378 15.0328 16.6372 15.0328 17.1399V18.3217H3.76515C3.72226 18.3217 3.70034 18.2895 3.70034 18.2657V14.6853C3.70001 14.6876 3.70034 14.6876 3.70034 14.6853C3.70144 14.6777 3.71019 14.6443 3.76558 14.5811C3.84201 14.4939 3.96901 14.3968 4.13312 14.309C4.96113 13.8655 5.53031 13.0005 5.53031 12C5.53031 10.9995 4.96113 10.1345 4.13312 9.69103C3.96901 9.60315 3.84201 9.50607 3.76558 9.41888C3.71019 9.35569 3.7014 9.32233 3.7003 9.31469L3.70034 5.73427Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconTicket = createReactComponent(
  "outline",
  "Icon_Ticket",
  "IconTicket",
  node
);
    