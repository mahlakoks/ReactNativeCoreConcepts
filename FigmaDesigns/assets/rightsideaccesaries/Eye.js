import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Eye = (props) => (
  <Svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.11775 13.0852C2.96075 12.7942 2.96075 12.4412 3.11775 12.1502C5.00975 8.65116 8.50476 5.61816 11.9998 5.61816C15.4948 5.61816 18.9898 8.65116 20.8818 12.1512C21.0388 12.4422 21.0388 12.7952 20.8818 13.0862C18.9898 16.5852 15.4948 19.6182 11.9998 19.6182C8.50476 19.6182 5.00975 16.5852 3.11775 13.0852Z"
      stroke="#30384A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.1213 10.4968C15.2929 11.6684 15.2929 13.5679 14.1213 14.7395C12.9498 15.9111 11.0503 15.9111 9.87868 14.7395C8.70711 13.5679 8.70711 11.6684 9.87868 10.4968C11.0503 9.32527 12.9498 9.32527 14.1213 10.4968"
      stroke="#30384A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
