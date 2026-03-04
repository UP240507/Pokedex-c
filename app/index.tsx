import { useEffect, useState } from "react";
import { View } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function Index() {
  const [results, setResults] = useState<any[]>([null]);

  useEffect(() => {
    getPokemons();
    console.log("Entré en una pantalla");
  }, []);
  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      const response = await fetch(URL, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setResults(data.results);
      } else {
        console.log("Request failed");
      }
    } catch (error) {
      console.log("Error fetching pokemons:", error);
    }

    const handlePress = () => {
      console.log("Botón presionado");
    };

    return (
      <View>
        {results.map((item) => {
          return (
            <PokemonCard key={item.name} name={item.name} URL={item.url} />
          );
        })}
      </View>
    );
  };
}
