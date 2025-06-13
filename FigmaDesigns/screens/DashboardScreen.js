import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native";

const DashboardScreen = ({ navigation, route }) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Dash board screen</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Settings" onPress={() => navigation.jumpTo("Settings")} />
    </View>
  );
};

export default DashboardScreen;

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
