import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Modal,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

import { useState } from "react";
export function CardItemOptions({ cardOption }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.cardinfo} >
        <View style={Styles.textcontent}>
          <Text>{cardOption}</Text>
        </View>
        <AntDesign name="right" style={Styles.icon} color="black" />
        {/* <Pressable >
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </Pressable> */}
        {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)} 
      >
        <View style={Styles.modalView}>
          <Text>Hello</Text>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={Styles.closeText}>Close</Text>
          </Pressable>
        </View>
      </Modal> */}
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  cardinfo: {
    flexDirection: "row",
    width: 356,
    height:48,
    alignItems: "baseline",
   justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: 'white',
    marginBottom:1,
  },
  textcontent: {
    fontWeight: 500,
    fontSize: 14,
    color: "#4B5160",
    height: 20,
    marginVertical: 14,
    height: 20,
  },
  container:{
    color:'red'
  }
});
