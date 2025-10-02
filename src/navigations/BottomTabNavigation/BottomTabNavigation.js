import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeScreen } from "../../screens/Home";
import { FavoritesScreen } from "../../screens/Favorites";
import { SearchScreen } from "../../screens/Search";

const Tab = createBottomTabNavigator();

export function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "yellow",
        tabBarInactiveTintColor: "black",
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Inicio") iconName = "home";
          if (route.name === "Favoritos") iconName = "heart";
          if (route.name === "Buscar") iconName = "magnify";
          return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Favoritos" component={FavoritesScreen} />
      <Tab.Screen name="Buscar" component={SearchScreen} />
    </Tab.Navigator>
  );
}
