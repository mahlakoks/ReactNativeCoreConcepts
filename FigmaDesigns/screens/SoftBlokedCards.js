import { View, Text, SafeAreaView, StyleSheet,ScrollView} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";


import {CardComponent} from "./CardComponent"
export function SoftBlokedCards(){
  return (
    <ScrollView style={Styles.container}>
      <View>
        <Text style={Styles.text}>
          SELECT SOFT BLOKED CARD
        </Text>
      </View>
      <CardComponent cardtype={'physical'}
        cardDesr={'Business Banking Card'}
        cardNumber={'2546-•••-•••-•••-4568'}
        cardStatus={'Soft blocked'}
      />
          <CardComponent cardtype={'physical'}
        cardDesr={'Business Banking Card'}
        cardNumber={'2546-•••-•••-•••-4568'}
        cardStatus={'Soft blocked'}
      />
          <CardComponent cardtype={'physical'}
        cardDesr={'Business Banking Card'}
        cardNumber={'2546-•••-•••-•••-4568'}
        cardStatus={'Soft blocked'}
      />
          <CardComponent cardtype={'physical'}
        cardDesr={'Business Banking Card'}
        cardNumber={'2546-•••-•••-•••-4568'}
        cardStatus={'Soft blocked'}
      />
      </ScrollView>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    paddingHorizontal: 20,
  },
  text: {
    paddingVertical: 20,
    color: 'gray',
    fontWeight: 'bold',
    fontSize:10
  }
});