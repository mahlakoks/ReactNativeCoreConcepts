import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";

export const InvestecBusinessText = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.mainText}>Investec Business Banking</Text>
      <Text style={styles.subText}>Physical</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    width: 362,
    height: s(80),
    backgroundColor: "red",
    alignItems: "center",
    paddingVertical: vs(16),
  },
  mainText: {
    width: s(259),
    height: s(34),
    fontWeight: "500",
    fontSize: s(20),
    color: "#30384A",
  },
  SubtleCryptoText: {
    width: s(57),
    height: s(20),
    fontWeight: "500",
    fontSize: s(14),
    color: "#5B626F",
    lineHeight: vs(20),
  },
});
