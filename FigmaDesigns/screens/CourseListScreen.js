import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native";

const CourseListScreen = ({ navigation,route}) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>CourseList screen</Text>
    </View>
  );
};

export default CourseListScreen;

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
