import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { recipes } from "../../utils/recipes";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function HomeScreen({ route }) {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState(route.params?.favorites || []);

  const toggleFavorite = (recipeId) => {
    let updated = [...favorites];
    if (updated.includes(recipeId)) {
      updated = updated.filter((id) => id !== recipeId);
    } else {
      updated.push(recipeId);
    }
    setFavorites(updated);
    navigation.setParams({ favorites: updated });
  };

  const renderItem = ({ item }) => {
    const isFavorite = favorites.includes(item.id);
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("RecipeDetail", { recipe: item })}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.overlay}>
          <Text style={styles.name}>{item.name}</Text>
          <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
            <MaterialCommunityIcons
              name={isFavorite ? "heart" : "heart-outline"}
              size={28}
              color={isFavorite ? "red" : "white"}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* ✅ Título arriba */}
      <Text style={styles.header}>RECETARIO</Text>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 40 },
  header: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginVertical: 15 },
  card: { margin: 10, borderRadius: 10, overflow: "hidden" },
  image: { width: "100%", height: 200 },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  name: { color: "white", fontSize: 18, fontWeight: "bold" },
});

