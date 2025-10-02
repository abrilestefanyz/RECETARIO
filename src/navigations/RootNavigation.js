import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNavigation } from "./BottomTabNavigation";
import { RecipeDetailScreen } from "../screens/RecipeDetail";

const Stack = createNativeStackNavigator();

export function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetailScreen}
        options={{ title: "Receta" }}
      />
    </Stack.Navigator>
  );
}
