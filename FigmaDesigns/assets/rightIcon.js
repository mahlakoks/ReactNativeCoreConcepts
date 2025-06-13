import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const RightIcon = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 16.5L14 12.5L10 8.5"
      stroke="#30384A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
