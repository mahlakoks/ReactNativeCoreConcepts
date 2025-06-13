import { View, Text, StyleSheet, Dimensions } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { RightIcon } from "../../assets/rightIcon";

export const CardUsage = ({ usageType }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>{usageType}</Text>
      <View style={Styles.iconcontainer}>
        <RightIcon />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: Dimensions.get("window").width - 32 - 16,
    height: 48,
    //backgroundColor: "orange",
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconcontainer: {
    height: 48,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "500",
    colour: "#30384A",
    fontSize: "16",
  },
});
