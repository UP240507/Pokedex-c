import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [results, setResults] = useState<any[]>([null]);

  useEffect(() => {
    getPokemons();
    console.log("Entré en una pantalla");
  }, []);
  const getPokemons = async () => {
    try {
      const URL = "";
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
          return <Text key={item.name}>{item.name}</Text>;
        })}
      </View>
    );
  };
}
