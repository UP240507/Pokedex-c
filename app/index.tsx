import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
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
        console.log("Request OK");
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
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    );
  };
}
