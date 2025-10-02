import React, { useState } from "react";
import { View, TextInput, FlatList, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { recipes } from "../../utils/recipes";
import { useNavigation } from "@react-navigation/native";

export function SearchScreen() {
  const [query, setQuery] = useState("");
  const navigation = useNavigation();

  const filtered = recipes.filter((r) =>
    r.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* ✅ Título arriba */}
      <Text style={styles.header}>BUSCAR</Text>

      <TextInput
        style={styles.input}
        placeholder="Buscar receta..."
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={filtered}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff", paddingTop: 40 },
  header: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 15 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  card: { marginBottom: 15 },
  image: { width: "100%", height: 180, borderRadius: 10 },
  name: { fontSize: 18, fontWeight: "bold", marginTop: 5 },
});


