import { Text, View, StyleSheet,Button } from "react-native";

export const NavigationTestScreen1 = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text>Navigation test</Text>
       <Button title="navigate" onPress={()=>navigation.navigate("Test2")}/>
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