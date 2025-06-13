import { Text, View, ScrollView, Pressable, SafeAreaView } from "react-native";
import { InvestecCard, UpDownArrows } from "../../assets/InvestecIcons";
import { CardManagementContainer } from "../../components/cardManagementContainer/CardManagementContainer";
import { CardInfo } from "../../components/cardInfo/cardInfo";
import { CardUsage } from "../../components/cardUsage/CardUsage";
import { styles } from "./BusinessBankingScreen.style";
import { useNavigation } from "@react-navigation/native";
export default function BusinessBankingScreen(props) {
  console.log("*******", props);
  const navigatior = useNavigation();
  return (
    <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container1}>
        <View style={styles.card}>
          <Text>Physical</Text>
          <View style={styles.cardSubInfo}>
            <InvestecCard />
            <View style={styles.cardSubInfoText}>
              <View>
                <Text>Business Banking Card</Text>
                <Text>245-••••-••••-••••-4568</Text>
              </View>
              <View style={styles.cardstatus}>
                <Text style={styles.cardstatustext}>Active</Text>
              </View>
            </View>
            <UpDownArrows />
          </View>
        </View>
        <View style={styles.cardName}>
          <Text>Investec Bussiness Banking</Text>
          <Text>Physical</Text>
        </View>
        <View style={styles.cardActionsBar}>
            <CardManagementContainer />
          {/* <Text>Display here</Text> */}
        </View>
        <View style={styles.cardInfomation}>
          <View>
            <Text style={styles.cardInfomationtext}>CARD INFORMATION</Text>
          </View>
          <View style={styles.cardComponents}>
            <CardInfo
              cardLabel={"Card display name"}
              cardHeader={"Business Banking card"}
            />
            <CardInfo
              cardLabel={"Entity name"}
              cardHeader={"Altra Running co."}
            />
            <CardInfo
              cardLabel={"Card number"}
              cardHeader={"2546XXXXXXXXXXXXX4568"}
            />
            <CardInfo cardLabel={"Expiry date"} cardHeader={"••/••"} />
            <CardInfo cardLabel={"CVV"} cardHeader={"•••"} />
          </View>
          <View style={styles.cardSensetiveInfomation}>
            <Text>
              This is sensitive information. Please store this information as
              safe as you would your physical Investec card.
            </Text>
          </View>
          <View style={styles.cardUsageComponents}>
            <CardUsage usageType="Card limits" />
            <CardUsage usageType="Card settings" />
            <CardUsage usageType="Tokens" />
            <CardUsage usageType="Transactions" />
          </View>
        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
  );
}
