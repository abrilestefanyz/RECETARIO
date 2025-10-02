import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { recipes } from "../../utils/recipes";
import { useNavigation } from "@react-navigation/native";

export function FavoritesScreen({ route }) {
  const navigation = useNavigation();
  const favorites = route.params?.favorites || [];
  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <View style={styles.container}>
      {/* ✅ Título arriba */}
      <Text style={styles.header}>FAVORITOS</Text>

      {favoriteRecipes.length === 0 ? (
        <Text style={styles.empty}>No tienes recetas favoritas</Text>
      ) : (
        <FlatList
          data={favoriteRecipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("RecipeDetail", { recipe: item })}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingTop: 40, paddingHorizontal: 10 },
  header: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 15 },
  empty: { textAlign: "center", marginTop: 20, fontSize: 18 },
  card: { marginBottom: 15 },
  image: { width: "100%", height: 180, borderRadius: 10 },
  name: { fontSize: 18, fontWeight: "bold", marginTop: 5 },
});
