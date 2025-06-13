import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native";

const AboutScreen = ({ route}) => {
  const navigation = useNavigation();
  const { name } = route.params;
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>About Screen {name}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Update user"
        onPress={() => navigation.setParams({ name: "Test Automation" })}
      />
        <Button
        title="Go back with data"
        onPress={() => navigation.navigate("Home", { result: 'Data from about' })}
      />
    </View>
  );
};

export default AboutScreen;

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
