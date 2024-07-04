
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M9.54601 6.24384C8.10939 6.24384 6.94479 7.35431 6.94479 8.72414C6.94479 10.094 8.10939 11.2044 9.54601 11.2044H14.454C15.8906 11.2044 17.0552 10.094 17.0552 8.72414C17.0552 7.35431 15.8906 6.24384 14.454 6.24384H9.54601ZM8.71166 8.72414C8.71166 8.28476 9.08521 7.92857 9.54601 7.92857H14.454C14.9148 7.92857 15.2883 8.28476 15.2883 8.72414C15.2883 9.16352 14.9148 9.5197 14.454 9.5197H9.54601C9.08521 9.5197 8.71166 9.16352 8.71166 8.72414Z" fill="#222222"/>
<path d="M8.56442 12.7956C7.94098 12.7956 7.43558 13.2775 7.43558 13.8719C7.43558 14.4664 7.94098 14.9483 8.56442 14.9483C9.18786 14.9483 9.69325 14.4664 9.69325 13.8719C9.69325 13.2775 9.18786 12.7956 8.56442 12.7956Z" fill="#222222"/>
<path d="M12 12.7956C11.3766 12.7956 10.8712 13.2775 10.8712 13.8719C10.8712 14.4664 11.3766 14.9483 12 14.9483C12.6234 14.9483 13.1288 14.4664 13.1288 13.8719C13.1288 13.2775 12.6234 12.7956 12 12.7956Z" fill="#222222"/>
<path d="M15.4356 12.7956C14.8121 12.7956 14.3067 13.2775 14.3067 13.8719C14.3067 14.4664 14.8121 14.9483 15.4356 14.9483C16.059 14.9483 16.5644 14.4664 16.5644 13.8719C16.5644 13.2775 16.059 12.7956 15.4356 12.7956Z" fill="#222222"/>
<path d="M8.56442 15.6034C7.94098 15.6034 7.43558 16.0853 7.43558 16.6798C7.43558 17.2743 7.94098 17.7562 8.56442 17.7562C9.18786 17.7562 9.69325 17.2743 9.69325 16.6798C9.69325 16.0853 9.18786 15.6034 8.56442 15.6034Z" fill="#222222"/>
<path d="M12 15.6034C11.3766 15.6034 10.8712 16.0853 10.8712 16.6798C10.8712 17.2743 11.3766 17.7562 12 17.7562C12.6234 17.7562 13.1288 17.2743 13.1288 16.6798C13.1288 16.0853 12.6234 15.6034 12 15.6034Z" fill="#222222"/>
<path d="M15.4356 15.6034C14.8121 15.6034 14.3067 16.0853 14.3067 16.6798C14.3067 17.2743 14.8121 17.7562 15.4356 17.7562C16.059 17.7562 16.5644 17.2743 16.5644 16.6798C16.5644 16.0853 16.059 15.6034 15.4356 15.6034Z" fill="#222222"/>
<path fillRule="evenodd" clipRule="evenodd" d="M6.11043 2.5C4.94487 2.5 4 3.40095 4 4.51232V19.4877C4 20.5991 4.94487 21.5 6.11043 21.5H17.8896C19.0551 21.5 20 20.5991 20 19.4877V4.51232C20 3.40094 19.0551 2.5 17.8896 2.5H6.11043ZM5.76687 4.51232C5.76687 4.33139 5.92069 4.18473 6.11043 4.18473H17.8896C18.0793 4.18473 18.2331 4.33139 18.2331 4.51232V19.4877C18.2331 19.6686 18.0793 19.8153 17.8896 19.8153H6.11043C5.92069 19.8153 5.76687 19.6686 5.76687 19.4877V4.51232Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconCalculator = createReactComponent(
  "outline",
  "Icon_Calculator",
  "IconCalculator",
  node
);
    