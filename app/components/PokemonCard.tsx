import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface PokemonCardProps {
  name: string;
  URL: string;
}

export default function PokemonCard(props: PokemonCardProps) {
  // Forma más compatible de sacar el ID sin usar .at(-1)
  const urlParts = props.URL.split("/").filter(Boolean);
  const id = urlParts[urlParts.length - 1];
  
  const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Pressable
      onPress={() => router.push(`/pokemon/${props.name}`)}
      style={({ pressed }) => [
        styles.pressableStyle,
        pressed && { opacity: 0.5 },
      ]}
    >
      <Image
        source={{ uri: pokemonImageURL }}
        style={styles.image}
      />
      <Text style={styles.text}>{props.name.toUpperCase()}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: "center",
    backgroundColor: "#1ce788",
    margin: 5,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row', // Para que se vea como lista si quieres
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    fontWeight: 'bold',
    marginLeft: 15,
  }
});