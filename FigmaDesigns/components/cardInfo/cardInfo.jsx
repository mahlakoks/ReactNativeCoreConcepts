import { Text, View, StyleSheet } from "react-native";
import { Cards } from "../../assets/cards";
import { Styles } from "./cardInfo.style"


export const CardInfo = ({ cardLabel = '-', cardHeader = "-" }) => {
  const {container,cardInfo,iconContainer} = Styles();
  return (
    <View style={container}>
      <View style={cardInfo}>
        <Text>{cardLabel}</Text>
        <Text>{cardHeader}</Text>
      </View>
      <Cards style={iconContainer} />
    </View>
  );
};