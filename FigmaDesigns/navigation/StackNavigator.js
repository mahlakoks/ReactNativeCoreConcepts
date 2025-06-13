import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutScreen from "../screens/AboutScreen";
import { NavigationTestScreen} from "../screens/NavigationTestScreen";
import { NavigationTestScreen1} from "../screens/NavigationTestScreen1";
import { NavigationTestScreen2 } from "../screens/NavigationTestScreen2";
import BusinessBankingScreen from "../screens/businessBankingScreen/BusinessBankingScreen"
import {BlokedCards} from "../screens/BlokedCards"
import { Drawernavi } from "./DrawerNavigator"
import {TabGroups} from "./TabNavigation"
const Stack = createNativeStackNavigator();

export function StackGroup() {
  return (
    <Stack.Navigator   screenOptions={{
        headerBackTitleVisible: true,
        headerShown: true,
      headerBackButtonDisplayMode: "minimal",
        headerStyle: {
          backgroundColor: "#FFFFFF",
          color:'red'
        },
        headerBackVisible: true,

      }}>
      {/* <Stack.Screen name="Test" component={Drawernavi} 
      BusinessBankingScreen
      TabGroups
      TabGroups
      /> */}
      <Stack.Screen name="My cards" component={BusinessBankingScreen} options={{
        headerBackTitleVisible: true,
        headerShown: true
      }} />
      <Stack.Screen name="Card PIN" component={BlokedCards}  options={{
        headerBackTitleVisible: true,
        headerShown: true
      }}/>
      <Stack.Screen name="Soft block" component={NavigationTestScreen2} />
      <Stack.Screen name="Stop card" component={NavigationTestScreen2} />
    </Stack.Navigator>
  );
}
