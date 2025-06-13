import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet,Button } from "react-native";

export const NavigationTestScreen = () => {
 const nagigator= useNavigation();
  return (
    <View style={Styles.container}>
      <Text>Navigation test</Text>
       <Button title="navigate" onPress={()=>nagigator.navigate("Test1")}/>
    </View>
  )
}

const Styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center'
    }
  }
)