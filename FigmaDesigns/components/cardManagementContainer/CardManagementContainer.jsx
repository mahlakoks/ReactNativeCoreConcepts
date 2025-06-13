import { View, ScrollView } from "react-native";
import { CardManagementButton } from "../CardManagementButton/CardManagementButton";
import { SoftBlockedCard } from "../../assets/softblokedcard";
import { BlockedCard } from "../../assets/blockedCard";
import { CardPin } from "../../assets/cardpin";
import { Styles } from "./cardManagementContainer.styles";

export const CardManagementContainer = () => {
  const cardData = [
    {
      name: "Card PIN",
      icon: CardPin,
      navigateToScreen:"Card PIN"
    },
    {
      name: "Soft block",
      icon: SoftBlockedCard,
        navigateToScreen:"Soft block"
    },
    {
      name: "Stop card",
      icon: BlockedCard,
      navigateToScreen:"Stop card"
    },
    // {
    //   name: "Card Pin",
    //   icon: CardPin,
    // },
  ];

  const { container } = Styles();

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={container}>
        {cardData.map((item, index) => {
          return (
            <CardManagementButton
              key={item.name + index}
              name={item.name}
              CardIcon={item.icon}
              navigateToScreen={item.navigateToScreen}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
