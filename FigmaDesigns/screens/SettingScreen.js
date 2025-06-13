import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native";

const SettingsScreen = ({ navigation,route}) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Settings screen</Text>
    </View>
  );
};

export default SettingsScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
