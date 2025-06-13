import { NavigationContainer } from "@react-navigation/native";
import { StackGroup } from "./navigation/StackNavigator";
import {Drawernavi} from "./navigation/DrawerNavigator"
import { SafeAreaView } from "react-native";
export default function App() {
  return (
    <NavigationContainer>
      {/* <StackGroup /> */}
      <Drawernavi/>
    </NavigationContainer>

  )
}
