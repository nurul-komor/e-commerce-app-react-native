import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/menu/Login";
import { useFonts } from "expo-font";
export default function App() {
  const [loadFont] = useFonts({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });
  if (!loadFont) {
    return null;
  }
  return (
    <View>
      <Login />
    </View>
  );
}
