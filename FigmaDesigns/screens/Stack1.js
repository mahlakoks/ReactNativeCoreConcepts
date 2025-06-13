import { View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";


export default function Stack1() {
  
  const navigation = useNavigation();
  
    useLayoutEffect(() => {
      navigation.setOptions({ headerTitle: 'Stack1' })
    },[])
  return (
    <SafeAreaView style={styles.container}>
      <Text>Stack1</Text>
      <Button title='click me 1' onPress={ ()=>navigation.navigate("Stack2")} />
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
