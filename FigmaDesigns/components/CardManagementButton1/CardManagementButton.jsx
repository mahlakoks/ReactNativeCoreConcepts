import { View, ScrollView } from "react-native";
import { CardStatus } from "../CardManagementButton/CardManagementButton";
import { SoftBlockedCard } from "../../assets/softblokedcard";
import { BlockedCard } from "../../assets/blockedCard";
import { CardPin } from "../../assets/cardpin";
import { Styles } from "./CardManagementButton.styles";

export const CardActions = () => {
  const cardData = [
    {
      name: "Card PIN",
      icon: CardPin,
    },
    {
      name: "Soft block",
      icon: SoftBlockedCard,
    },
    {
      name: "Stop card",
      icon: BlockedCard,
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
            <CardStatus
              key={item.name + index}
              name={item.name}
              CardIcon={item.icon}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
