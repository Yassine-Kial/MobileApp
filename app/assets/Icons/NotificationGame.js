import * as React from "react"
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";
function NotificationGame(props) {
    return (

       <Svg
      width={36}
      height={26}
      viewBox="0 0 36 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M34.898 12.284c-1.7-7.11-3.507-10.888-7.109-11.96C27.006.091 26.337 0 25.72 0 23.503 0 21.95 1.18 18 1.18 14.048 1.18 12.495 0 10.28 0c-.616 0-1.282.091-2.066.324-3.606 1.072-5.412 4.85-7.109 11.96-1.702 7.11-1.393 12.243.617 13.202.327.156.662.228 1 .228 1.744 0 3.628-1.915 5.438-4.182 2.061-2.58 2.58-2.648 8.861-2.648h1.957c6.28 0 6.8.068 8.861 2.648 1.81 2.267 3.695 4.179 5.438 4.179.34 0 .674-.07 1-.227 2.01-.958 2.32-6.09.62-13.2zM8.296 13.47c-1.74 0-3.153-1.427-3.153-3.184 0-1.754 1.414-3.185 3.153-3.185 1.74 0 3.154 1.43 3.154 3.186s-1.414 3.183-3.154 3.183zm13.889-1.566a1.617 1.617 0 111.619-1.616c0 .891-.725 1.616-1.62 1.616zm3.528 3.525a1.612 1.612 0 010-3.224 1.612 1.612 0 110 3.224zm0-7.057a1.615 1.615 0 11.007-3.229 1.615 1.615 0 01-.007 3.23zm3.533 3.532a1.616 1.616 0 010-3.231 1.615 1.615 0 010 3.231z"
        fill="#fff"
      />
    </Svg>
    );
}
export default NotificationGame;