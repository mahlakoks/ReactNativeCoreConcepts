import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { InvestecCard } from "../assets/InvestecIcons";
export const CardComponent = ({
  cardtype,
  cardDesr,
  cardNumber,
  cardStatus,
}) => {
  return (
    <SafeAreaView>
      <View>
        <View style={Styles.card}>
          <Text>{cardtype}</Text>
          <View style={Styles.cardDetails}>
            <View style={Styles.cardDetails}>
              <View>
                {/* <Ionicons name="id-card" size={48} color="black" /> */}
                <InvestecCard />
              </View>
              <View>
                <Text> {cardDesr}</Text>
                <Text> {cardNumber}</Text>
              </View>
            </View>

            <View>
              <Text
                style={
                  cardStatus === "Active"
                    ? { backgroundColor: "#E6F9E7" }
                    : cardStatus === "Soft blocked"
                    ? { backgroundColor: "orange", color: "brown" }
                    : { backgroundColor: "pink", color: "red" }
                }
              >
                {cardStatus}
              </Text>
            </View>

            {cardStatus === "Active" ? (
              <View>
                <AntDesign name="up" size={8} color="black" />
                <AntDesign name="down" size={8} color="black" />
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: "lightgray",
  //   marginHorizontal: 20,
  // },
  maincontainer: {
    backgroundColor: "red",
  },
  card: {
    borderRadius: 8,
    borderWidth: 2,
    width: 360,
    height: 88,
    paddingRight: 16,
    paddingLeft: 16,
    backgroundColor: "#FFFFFF",
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
    marginVertical: 10,
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
    paddingVertical: 20,
    fontSize: 12,
  },
});
