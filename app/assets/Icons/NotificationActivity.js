import * as React from "react"
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";
function NotificationActivity(props) {
    return (

       <Svg
      width={36}
      height={37}
      viewBox="0 0 36 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.622 23.333l5.107-6.637 5.825 4.576 4.998-6.45M31.377 8.559a3.28 3.28 0 100-6.56 3.28 3.28 0 000 6.56z"
        stroke="#fff"
        strokeWidth={2.5594}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.725 3.437h-12.4C5.185 3.437 2 7.076 2 12.214v13.79c0 5.14 3.124 8.763 8.324 8.763h14.681c5.139 0 8.325-3.624 8.325-8.762v-12.01"
        stroke="#fff"
        strokeWidth={2.5594}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
    );
}
export default NotificationActivity;