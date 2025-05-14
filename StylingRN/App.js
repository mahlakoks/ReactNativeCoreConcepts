import { StyleSheet, Text, View } from "react-native";
// npx create-expo-app@latest StylingRN --template blank
export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueColor]}>
        <Text>box1</Text>
      </View>
      <View style={[styles.box, styles.lightgreenColor]}>
        <Text>box1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "50%", //percentage applies the parend dimentions are defined
    height: "50%",
    /// padding:10
    paddingHorizontal: 30,
    paddingVertical: 50,
    marginBottom: 10,
    borderWidth: 2, //border properties applied individually
    borderColor: "purple",
  }, //boardder radius applied on view works for ios and android if applied on text it only woks on android
  lightblueColor: {
    backgroundColor: "lightblue",
  },
  lightgreenColor: {
    backgroundColor: "lightgreen",
  },
});
