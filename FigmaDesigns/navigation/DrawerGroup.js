import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { CardPIN } from "../modals/CardPIN";
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
  useRoute,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Drawer1 from "../screens/Drawer1";
import Drawer2 from "../screens/Drawer2";
import Drawer3 from "../screens/Drawer3";
import { CardOptionsStack } from "./CardOptionsStack-j-s";
import { MainCard } from "../screens/MainCard";
import { TopTabsGroup } from "./TopTabsGroup";
const Drawer = createDrawerNavigator();

export function DrawerGroup() {
  //const navigation = useNavigation();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="My cards"
        component={() => (
          <View>
            <Text>English</Text>
          </View>
        )}
      />
      {/* //   <Drawer.Screen name="test2" component={Drawer2} /> */}
    </Drawer.Navigator>
  );
}

/*

    
//       {/* <StatusBar backgroundColor="red" /> */
//       <Drawer.Navigator>
//     {/* // screenOptions={ */}
//     {
//         //   headerLeft: () => {
//         //     return (
//         //       <SimpleLineIcons
//         //         name="menu"
//         //         onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//         //         size={24}
//         //         color="black"
//         //       />
//         //     );
//         //   },
//         // }}
//     //  >
//       //   <Drawer.Screen name="My cards" component={Drawer1} />
//       //   <Drawer.Screen
//       //     name="My cards2"
//       //     component={Drawer2}
//       //   />
//       // </Drawer.Navigator>
// */
