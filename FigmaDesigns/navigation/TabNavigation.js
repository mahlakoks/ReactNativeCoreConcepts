import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationTestScreen } from "../screens/NavigationTestScreen";
import { NavigationTestScreen1 } from "../screens/NavigationTestScreen1";
import { NavigationTestScreen2 } from "../screens/NavigationTestScreen2";
import BusinessBankingScreen from "../screens/businessBankingScreen/BusinessBankingScreen";
import {StackGroup} from "../navigation/StackNavigator"

const MyTabs = createMaterialTopTabNavigator();

export function TabGroups() {
  return (
    <MyTabs.Navigator>
      <MyTabs.Screen name="Active" component={StackGroup}
        options={{
          headerBackTitleVisible: true,
          headerShown: true,}} />
     {/* StackGroup */}
      {/* <MyTabs.Screen name="Active" component={StackGroup} /> */}
      <MyTabs.Screen name="Soft Bloked" component={NavigationTestScreen1} />
      <MyTabs.Screen name="Stopped" component={NavigationTestScreen2} />
    </MyTabs.Navigator>
  );
}
