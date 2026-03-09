import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function PokemonDetailsScreen() {
  const params = useLocalSearchParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    getPokemonsData();
  }, [params.name]);

  const getPokemonsData = async () => {
    try {
      const URL = `https://pokeapi.co/api/v2/pokemon/${params.name}`;
      const response = await fetch(URL, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setPokemonData(data);
      } else {
        console.log("Request failed");
      }
    } catch (error) {
      console.log("Error fetching pokemons:", error);
    }
  };

  return (
    <View>
      <Text>{params.name}</Text>
      <Text>{JSON.stringify(pokemonData)}</Text>
    </View>
  );
}
