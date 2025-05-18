import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native";

const HomeScreen = ({ navigation,route}) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Home Screen</Text>
            <Text style={Styles.text}>{route.params?.result}</Text>

      <Button
        title="Go to test About"
        // onPress={() => navigation.navigate("About", { name: "Nigel" })}
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
};

export default HomeScreen;

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
