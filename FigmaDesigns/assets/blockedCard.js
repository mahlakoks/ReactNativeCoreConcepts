import Svg, { Path } from "react-native-svg";
export const BlockedCard = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3 7H21"
      stroke="#30384A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.57 11H7"
      stroke="#30384A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 17H6C4.343 17 3 15.657 3 14V6C3 4.343 4.343 3 6 3H18C19.657 3 21 4.343 21 6V10"
      stroke="#30384A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 16.958C22 19.749 19.749 22 16.958 22C14.167 22 11.916 19.749 11.916 16.958C11.916 14.167 14.167 11.916 16.958 11.916C19.749 11.916 22 14.167 22 16.958Z"
      stroke="#30384A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.394 20.5216L20.522 13.3936"
      stroke="#30384A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
