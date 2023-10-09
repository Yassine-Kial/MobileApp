import * as React from "react"
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";
function CommentIcon(props) {
    return (
         <Svg
      width={40}
      height={40}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M20.25 2.25H6.75a3.375 3.375 0 00-3.375 3.375V18a3.375 3.375 0 003.375 3.375h2.914l3.037 3.049a1.124 1.124 0 00.799.326c.268 0 .527-.096.731-.27l3.623-3.105h2.396A3.375 3.375 0 0023.625 18V5.625A3.375 3.375 0 0020.25 2.25zM21.375 18a1.125 1.125 0 01-1.125 1.125h-2.813c-.268 0-.527.096-.73.27l-3.15 2.7-2.633-2.644a1.124 1.124 0 00-.799-.326H6.75A1.125 1.125 0 015.625 18V5.625A1.125 1.125 0 016.75 4.5h13.5a1.125 1.125 0 011.125 1.125V18z"
        fill="#461066"
      />
    </Svg>  
    );
}
export default CommentIcon;