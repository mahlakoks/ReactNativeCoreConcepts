import React, { useState } from "react";
import { View, Text, ScrollView, Switch, StyleSheet } from "react-native";
import { CardComponent } from "./CardComponent";

export default function CardSettingsScreen() {
  const [usage, setUsage] = useState({
    atms: false,
    instore: true,
    contactless: true,
    international: false,
    online: false,
  });

  return (
    <ScrollView style={styles.bg}>
      <View style={styles.cardBox}>
        <CardComponent
          cardtype="Physical"
          cardDesr="Business Banking card"
          cardNumber={"2546 •••• •••• •••• 4568"}
          cardStatus="Active"
        />
      </View>
      <Text style={styles.sectionTitle}>Card usage</Text>
      <View style={styles.usageBox}>
        <View style={styles.usageRow}>
          <Text style={styles.usageText}>Use my card at ATMs</Text>
          <Switch
            value={usage.atms}
            onValueChange={(v) => setUsage((u) => ({ ...u, atms: v }))}
            trackColor={{ false: "gray", true: "black" }}
            thumbColor={"white"}
          />
        </View>
        <View style={styles.usageRow}>
          <Text style={styles.usageText}>In-store purchases</Text>
          <Switch
            value={usage.instore}
            onValueChange={(v) => setUsage((u) => ({ ...u, instore: v }))}
            trackColor={{ false: "gray", true: "black" }}
            thumbColor={"white"}
          />
        </View>
        <View style={styles.usageRow}>
          <Text style={styles.usageText}>Contactless purchases</Text>
          <Switch
            value={usage.contactless}
            onValueChange={(v) => setUsage((u) => ({ ...u, contactless: v }))}
            trackColor={{ false: "gray", true: "black" }}
            thumbColor={"white"}
          />
        </View>
        <View style={styles.usageRow}>
          <Text style={styles.usageText}>International purchases</Text>
          <Switch
            value={usage.international}
            onValueChange={(v) => setUsage((u) => ({ ...u, international: v }))}
            trackColor={{ false: "gray", true: "black" }}
            thumbColor={"white"}
          />
        </View>
        <View style={styles.usageRow}>
          <Text style={styles.usageText}>Online purchases</Text>
          <Switch
            value={usage.online}
            onValueChange={(v) => setUsage((u) => ({ ...u, online: v }))}
            trackColor={{ false: "gray", true: "black" }}
            thumbColor={"white"}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: "#F6F6F4",
    height: 926,
    width: 428,
    paddingHorizontal: 12,
    paddingTop: 20,
  },
  cardBox: {
    backgroundColor:"#E6F9E7",
    width: 396,
    height: 88,
 // marginTop: 108,
 //   paddingLeft:16,
   // margin: 16,
   // marginBottom: 8
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
    height: 28,
    width:100,
    color: "#30384A",
    marginHorizontal: 12,
    marginVertical:12,
  },
  usageBox: {
borderRadius: 8,
  },
  usageRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    marginBottom: 1,
    backgroundColor: "#E6E5E1",
    borderRadius: 8,
    borderWidth: 1,
    width: 355,
    height:56
  },
  usageText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#5B626F",
    paddingLeft:12,
  },
});
