import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";

export function CardItem({ info, details, iconname }) {
  return (
    <SafeAreaView>
      <View style={Styles.cardinfo}>
        <View>
          <Text style={Styles.cardInfoheader}>{info}</Text>
          <Text style={Styles.cardInfoText}>{details}</Text>
        </View>
        {iconname === "eye" ? (
          <Feather style={Styles.icon} name="eye" color="black" />
        ) : (
          <MaterialCommunityIcons style={Styles.icon}  name={iconname} color="black" />
        )}
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  cardinfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
     borderRadius: 8,
    borderWidth: 0,
    backgroundColor: "white",
    padding: 5,
    height: 64,
    width: 360,
  
  },
  cardInfoText: {
    fontWeight: "500",
    fontSize: 16,
    height: 24,
    color:'#30384A'
  },
  cardInfoheader: {
    fontWeight: "500",
    fontSize: 12,
    height: 18,
    color:'#5B626F'
  },
  icon: {
    width: 24,
    height:24
  }
});
