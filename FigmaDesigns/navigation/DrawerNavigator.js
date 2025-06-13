import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationTestScreen } from "../screens/NavigationTestScreen";
import { NavigationTestScreen1 } from "../screens/NavigationTestScreen1";
import { NavigationTestScreen2 } from "../screens/NavigationTestScreen2";
import {BlokedCards} from "../screens/BlokedCards"
import { TabGroups } from "./TabNavigation";
import { StackGroup } from "./StackNavigator";
import BusinessBankingScreen from "../screens/businessBankingScreen/BusinessBankingScreen"
const drawerNavigate = createDrawerNavigator();

export function Drawernavi() {
  return (
    <drawerNavigate.Navigator >
      {/* <drawerNavigate.Screen
        name="My cards"
        component={TabGroups}
        options={{
          headerStyle: {
            justifyContent: "flex-start",
          },
        }}
      /> */}
      {/*  
      TabGroups
      StackGroup
      */}
     <drawerNavigate.Screen name="My Drawer cards" component={TabGroups}  options={{headerShown:true}}/>
      <drawerNavigate.Screen name="Test1" component={BlokedCards} />
      <drawerNavigate.Screen name="Test2" component={NavigationTestScreen2} />
    </drawerNavigate.Navigator>
  );
}
