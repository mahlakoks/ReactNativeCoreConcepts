import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { s, vs } from "react-native-size-matters";

import { Card } from "../components/card";
import { InvestecBusinessText } from "../components/investecBusinessText";
import { CardStatuses } from "../components/cardManagementContainer/cardStatuses";
import { CardInfo } from "../components/cardInfo/cardInfo";
import { CardItem } from "./CardItem";
import { CardItemOptions } from "./CardItemOptions";
import { CardComponent } from "./CardComponent";
import { useNavigation } from "@react-navigation/native";
import { CardPIN } from "../modals/CardPIN";
import React, { useState } from "react";
import { CardSettingsScreenModal } from "../modals/CardSettingsScreenmodal";
import { CardLimits } from "../modals/CardLimits";
export function MainCard() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSettingsModalVisible, setSettingModalVisible] = useState(false);

  return (
    // <SafeAreaView>
    <ScrollView style={Styles.container}>
      <Card />
      <InvestecBusinessText />
      <CardStatuses />
      {/* <View>
        <Text> CARD INFORMATION </Text>
      </View>
      <View style={Styles.cardInfoContainer}>
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
      </View>
      <View style={Styles.cardUsageContainer}>
        
      </View> */}

      {/* <CardComponent
        cardtype={"physical"}
        cardDesr={"Business Banking Card"}
        cardNumber={"2546-•••-•••-•••-4568"}
        cardStatus={"Active"}
      /> */}
      {/* <Card />
      <View style={Styles.BBInfo}>
        <View style={Styles.BBSubInfo}>
          <Text style={Styles.BBText}>Investec Business Banking</Text>
        </View>
        <View style={Styles.BBSubInfo}>
          <Text>Physical</Text>
        </View>
      </View>

      <View style={Styles.cardActions}>
        <Pressable onPress={() => navigation.navigate("Card Pin")}>
          <View>
            <View style={Styles.cardIcon}>
              <MaterialCommunityIcons
                name="table-key"
                size={24}
                color="black"
              />
            </View>
            <Text>Card PIN</Text>
          </View>
        </Pressable>
        {isModalVisible && (
          <CardPIN
            visible={isModalVisible}
            onClose={() => setModalVisible(false)}
          />
        )}
        <View>
          <View style={Styles.cardIcon}>
            <MaterialCommunityIcons
              name="pause-circle-outline"
              size={24}
              color="black"
            />
          </View>

          <Text>Soft block</Text>
        </View>

        <View>
          <View style={Styles.cardIcon}>
            <MaterialCommunityIcons name="cash-lock" size={24} color="black" />
          </View>

          <Text>Stop card</Text>
        </View>
      </View>

      <View>
        <Text> CARD INFORMATION</Text>
      </View>
      <View style={Styles.cardInfoContainer}>
        <CardItem
          info={"Card display name"}
          details={"Business Banking card"}
          iconname={"card-multiple-outline"}
        />
        <CardItem
          info={"Entity name"}
          details={"Altra Running co."}
          iconname={"card-multiple-outline"}
        />
        <CardItem
          info={"Card number"}
          details={"2546XXXXXXXXXXXXXXXX4568"}
          iconname={"eye"}
        />
        <CardItem info={"Expiry date"} details={"••/••"} iconname={"eye"} />
        <CardItem info={"CVV"} details={"•••"} iconname={"eye"} />
      </View>

      <View>
        <Text style={Styles.infoText}>
          This is sensitive information.Please store this information as safe as
          you would your physical investec card.
        </Text>
      </View>

      <Pressable onPress={()=> navigation.navigate('Card Limits')}>
      <CardItemOptions cardOption={"Card limits"} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Card Settings")}>
        <CardItemOptions cardOption={"Card settings"} />
      </Pressable>
      <CardItemOptions cardOption={"Tokens"} />
      <CardItemOptions cardOption={"Transactions"} />
    */}
    </ScrollView>
    // </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F4",
    paddingHorizontal: 16,
    paddingTop: 30,
    width: 428,
    height: 950,
    // margintop: vs(116),
    // marginHorizontal: s(16),
    // marginVertical: vs(16),
  },
  card: {
    marginTop: 50,
    backgroundColor: "Red",
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
  },
  cardDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardStatus: {
    backgroundColor: "lightgreen",
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
  cardInfoContainer: {
    width: 396,
    height: 384,
    backgroundColor: "yellow",
  },
  cardUsageContainer: {
    width: 396,
    height: 192,
    backgroundColor: "blue",
  },
  cardIcon: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  BBText: {
    paddingHorizontal: 50,
    fontSize: 20,
  },
  BBInfo: {
    flexDirection: "col",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 20,
  },
  BBSubInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  infoText: {
    //paddingVertical: 20,
    fontSize: 12,
    fontWeight: "500",
    color: "#5B626F",
    height: 36,
    width: 364,
  },
});
