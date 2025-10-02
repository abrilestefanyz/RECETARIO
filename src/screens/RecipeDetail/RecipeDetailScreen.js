import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export function RecipeDetailScreen({ route }) {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.title}>{recipe.name}</Text>

      <Text style={styles.subtitle}>Ingredientes:</Text>
      {recipe.ingredients.map((ing, idx) => (
        <Text key={idx} style={styles.text}>• {ing}</Text>
      ))}

      <Text style={styles.subtitle}>Preparación:</Text>
      <Text style={styles.text}>{recipe.preparation}</Text>

      <Text style={styles.subtitle}>Tiempo de preparación:</Text>
      <Text style={styles.text}>{recipe.time}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 15 },
  image: { width: "100%", height: 200, borderRadius: 10 },
  title: { fontSize: 24, fontWeight: "bold", marginVertical: 10 },
  subtitle: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  text: { fontSize: 16, marginTop: 5 },
});
