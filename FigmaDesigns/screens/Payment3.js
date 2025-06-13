import { View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Payment3({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Stack1eeee</Text>
      <Button title='click me' onPress={ ()=>navigation.back()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
