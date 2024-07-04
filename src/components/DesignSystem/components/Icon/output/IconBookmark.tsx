
import createReactComponent from "../createReactComponent";
import { svgStringToIconNode } from "../svgToIconNode";

const svgString = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M6.69109 3C5.19577 3 4 4.25064 4 5.77284V19.5959C4 20.6733 5.15491 21.3723 6.07873 20.7886L12 17.0469L17.9213 20.7886C18.8451 21.3723 20 20.6733 20 19.5959V5.77284C20 4.25064 18.8042 3 17.3089 3H6.69109ZM5.84291 5.77284C5.84291 5.27404 6.23154 4.886 6.69109 4.886H17.3089C17.7685 4.886 18.1571 5.27404 18.1571 5.77284V18.721L12.6537 15.2434C12.2543 14.991 11.7457 14.991 11.3463 15.2434L5.84291 18.721V5.77284Z" fill="#222222"/>
</svg>
`;
const node = svgStringToIconNode(svgString);

export const IconBookmark = createReactComponent(
  "outline",
  "Icon_Bookmark",
  "IconBookmark",
  node
);
    