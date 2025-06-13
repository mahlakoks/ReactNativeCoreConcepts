import { View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Payment2({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Stack122a</Text>
      <Button title='click me' onPress={ ()=>navigation.navigate("HomeStack2")} />
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
