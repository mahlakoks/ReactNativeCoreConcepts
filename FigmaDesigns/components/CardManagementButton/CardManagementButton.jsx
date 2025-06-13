import { View, Text, StyleSheet, Pressable,Alert } from "react-native";
import { s, vs } from "react-native-size-matters";
import { Card } from "../../assets/InvestecIcons";
import Styles from "./CardManagementButton.style";
import { useNavigation } from "@react-navigation/native";

export const CardManagementButton = ({ name = "Card PIN", CardIcon,navigateToScreen}) => {
  const { container, subcontainer } = Styles();
  const navigator  = useNavigation();
  console.log('??????Navigation >>>',  navigateToScreen )
  return (
    <View style={container}>
      <View style={subcontainer}>
        <Pressable onPress={() => navigator.navigate(navigateToScreen)}>
          {CardIcon ? <CardIcon /> : <Card />}
        </Pressable>
      </View>
      <Text>{name}</Text>
    </View>
  );
};
