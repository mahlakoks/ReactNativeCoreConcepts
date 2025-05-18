import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./screens/DashboardScreen";
import SettingsScreen from "./screens/SettingScreen";

const Drawer = createDrawerNavigator();

export const DrawerNav=()=>{
  return (
        <Drawer.Navigator>
        <Drawer.Screen name='Dashboard' component={DashboardScreen} />
        <Drawer.Screen name='Settings' component={SettingsScreen} />
      </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
    <DrawerNav />
    </NavigationContainer>
  );
}
