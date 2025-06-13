import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

export const AboutStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "purple",
        },
        headerTintColor: "orange",
        headerTitleStyle: { fontWeight: "bold" },
        contentStyle: { backgroundColor: "gold" },
        headerRight: () => (
          <Button
            title="Notifications"
            onPress={() => alert("Notifications clicked!")}
          />
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Welcome to Home",
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        initialParams={{ name: "Guest" }}
        options={
          ({ route }) => ({ title: route.params?.name })
    }
      /> 
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AboutStack />
    </NavigationContainer>
  );
}
