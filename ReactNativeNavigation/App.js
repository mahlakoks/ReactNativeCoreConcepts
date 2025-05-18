import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./screens/ProfileScreen";
import CourseListScreen from "./screens/CourseListScreen";
import SettingsScreen from "./screens/SettingScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AboutStack } from "./AppStack";
import { DrawerNav } from "./AppDrawer";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "plum",
        }}
      >

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={20} color={color} />
            ),
            tabBarBadge:3
          }}
        />
        <Tab.Screen name="CourseList" component={CourseListScreen}
           options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="subject" size={24} color={color} />
            ),
          }}/>
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="setting" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="About Stack" component={AboutStack} options={{
            headerShown:false
            }} />

        </Tab.Navigator>
    </NavigationContainer>
  );
}
