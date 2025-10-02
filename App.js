import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigation } from "./src/navigations";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
