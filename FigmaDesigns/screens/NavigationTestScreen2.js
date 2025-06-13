import { Text, View, StyleSheet,Button } from "react-native";

export const NavigationTestScreen2 = (props) => {
  
  console.log(props)
  return (
    <View style={Styles.container}>
      <Text>Navigation test</Text>
      <Button title="navigate"/>
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