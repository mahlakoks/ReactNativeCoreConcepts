import { View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BottomNav1({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>BottomNav1</Text>
      <Button title='Click me' onPress={()=>navigation.navigate('HomeStack2')}/>
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
