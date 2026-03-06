import React from "react";
import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from "react-native";

interface PokemonCardProps {
  name: string;
  URL: string;
}

export default function PokemonCard(props: PokemonCardProps) {
  const id = props.URL.split("/").filter(Boolean).at(-1);
  const pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <Pressable
      onPress={() => router.push("/New-Screen")}
      style={styles.pressableStyle}
    >
      <Image
        source={{ uri: pokemonImageURL }}
        style={{ width: 100, height: 100 }}
      ></Image>
      <Text>{props.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableStyle: {
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "#1ce788",
  },
});
