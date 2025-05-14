import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Box from "./components/box";
export default function App() {
  return (
    <View style={styles.container}>
      <Box style={{ backgroundColor: "red" }}> Test7</Box>
      <Box style={{ backgroundColor: "blue" }}> Test6</Box>
      <Box style={{ backgroundColor: "orange" }}> Test5</Box>
      <Box style={{ backgroundColor: "pink" }}> Test4</Box>
      <Box style={{ backgroundColor: "blank" }}> Test3</Box>
      <Box style={{ backgroundColor: "gray" }}> Test2</Box>
      <Box style={{ backgroundColor: "black" }}>Test1</Box>
      
    </View>
  );
}

// Direction of main axes flexDirection
// justifycontent default flex-start main axes

//align items opposite Flex Direction  default streach
// align self is applied to individual items default auto and it inherites its value from alignitems proparty of its parent
//flex-wrap manage limited space default no-wrap


// Position Ralative and absolute
// Absolute : Independently of its siblings

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: 250, 
    // rowGap: 8,
    // columnGap: 8,
    gap:8,
    //flexDirection: "col",
    flexWrap:"wrap",
    justifyContent: "space-between",
    marginTop: 20,
    borderWidth: 6,
    borderColor: "lightblue",
  },
});
