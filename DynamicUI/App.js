import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useColorScheme,
  SafeAreaProvider,
  SafeAreaView,
  Alert,
  Button,
   Platform,
} from "react-native";

import CustomButton from "./components/CustomButtons/CusttomButton";
//React native will choose the OS automatically depending on device

import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
  useRoute,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import {CardOptionsStack} from "./navigations/CardOptionsStack";
import { DrawerGroup } from "./navigations/DrawerGroup"
import { TopTabsGroup } from "./navigations/TopTabsGroup";

// export default function App() {
//   return (
//     <SafeAreaView style={Styles.safearea}>
//       <StatusBar backgroundColor="red" hidde={false} />

//       <NavigationContainer>
//         {/* <TopTabsGroup/> */}
//         {/* <DrawerGroup /> */}
//         <CardOptionsStack/>
//       </NavigationContainer>

export default function App() {
  const colorScheme = useColorScheme();
  const platformName=Platform.OS
  return (
    // <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text>Hello Knoch</Text>
      <CustomButton title={platformName} onPress={() => alert("why did you press")} />
      <Button title="Test" />
    </SafeAreaView>
    // </SafeAreaProvider>
  );
}

// screen=> Entire physical display of device  Window=>Visible area of the screen occupied by app ui
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

//Drawback ==> Dimesion are not updated when device is rotated

//Solution1
//useSate and useEffect

//Solution2  The recommended
// import useWindowDimensions

//useSate and useEffect

//Shift + I to get ios devices

const styles = StyleSheet.create({
  container: {
    backgroundColor: "plum",
    flex: 1,
    // ...Platform.select({
    //   android: {
    //     backgroundColor: "lightblue",
    //        padding:20,
    //   },
    //   ios: {
    //     backgroundColor: "plum",
    //   },
    //   default: {
    //     // other platforms, web for example
    //     backgroundColor: "blue",
    //   },
    // }),
  },
});
