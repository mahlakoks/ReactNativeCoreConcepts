import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { InvestecCard, UpDownArrows } from "../assets/InvestecIcons";

export const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTypeText}>Physical</Text>
      <View style={styles.cardDetailsContainer}>
        <View style={styles.cardIcon}>
          <InvestecCard />
        </View>
        <View style={styles.cardDetails1}>
          <View style={styles.cardDetails}>
            <Text style={styles.maincardtext}>Business Banking Card</Text>
            <View style={styles.status}>
              <Text style={styles.labelStatus}>Active</Text>
            </View>
            <View style={styles.updownIcon}>
              <UpDownArrows />
            </View>
          </View>

          <View>
            <Text style={styles.cardNumber}>2546-••••-••••-••••-4568</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 8,
    borderWidth: 2,
    height: s(88),
    width: s(325),
    borderColor: "#D1D2D6",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: s(8),
    paddingVertical: vs(8),
   },
  cardDetailsContainer: {
    flexDirection: "row",
  },
  cardTypeText: {
    fontWeight: "500",
    fontSize: s(16),
    lineHeight: vs(18),
    height: s(18),
    width: s(300),
    color: "#5B626F",
    paddingBottom: s(20),
  },
  cardIcon: {},
  cardDetails: {
    flex: 1,
    flexDirection: "row",

    justifyContent: "space-between",
  },
  cardDetails1: {
    flex: 1,
    flexDirection: "col",
    marginStart: s(8),
  },
  maincardtext: {
    fontWeight: "500",
    fontSize: s(16),
    lineHeight: vs(24),
    height: s(24),
    width: s(200),
    color: "#30384A",
  },
  status: {
    borderRadius: 4,
    height: vs(24),
    width: s(51),
    padddingright: s(4),
    paddingLeft: s(4),
    alignItems: "center",
    justifyContent: "center",
  },
  labelStatus: {
    backgroundColor: "#E6F9E7",
  },
  updownIcon: {
    height: vs(24),
    width: s(24),
    marginstart: s(8),
  },
  cardNumber: {
    fontWeight: "500",
    fonstsize: s(14),
    lineHeight: vs(20),
    color: "#5B626F",
  },
});
