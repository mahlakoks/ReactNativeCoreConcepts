import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";


export default () =>{
  return {
  container: {
    width: s(116),
    height: vs(98),
    padding: s(1),
    alignItems: "center",
    justifyContent: "center",
  },
  subcontainer: {
    //borderWidth: 2,
    //borderRadius: 7,
    width: s(56),
    height: vs(56),
    alignItems: "center",
    justifyContent: "center",
  }
}
}
