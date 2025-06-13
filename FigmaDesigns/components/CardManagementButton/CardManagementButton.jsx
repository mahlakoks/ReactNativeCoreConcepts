import { View, Text, StyleSheet, Pressable,Alert } from "react-native";
import { s, vs } from "react-native-size-matters";
import { Card } from "../../assets/InvestecIcons";
import Styles from "./CardManagementButton.style";
import { useNavigation } from "@react-navigation/native";

export const CardManagementButton = ({ name = "Card PIN", CardIcon }) => {
  const { container, subcontainer } = Styles();
  const navigator  = useNavigation();
  console.log('??????Navigation >>>',  navigator )
  return (
    <View style={container}>
      <View style={subcontainer}>
        <Pressable onPress={() => navigator.navigate("Test1")}>
          {CardIcon ? <CardIcon /> : <Card />}
        </Pressable>
      </View>
      <Text>{name}</Text>
    </View>
  );
};
