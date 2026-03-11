import { useEffect, useState } from "react";
import { ScrollView, TextInput, View, Text } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function Index() {
  const [results, setResults] = useState<any[]>([]);
  const [respaldo, setRespaldo] = useState<any[]>([]);
  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setResults(data.results);
        setRespaldo(data.results);
      }
    } catch (error) {
      console.log("Error fetching pokemons:", error);
    }
  };

  const handleFiltro = (nombre: string) => {
    setBuscar(nombre);

    if (nombre.trim() === "") {
      setResults(respaldo);
      return;
    }

    const filtrados = respaldo.filter((item) =>
      item.name.toLowerCase().includes(nombre.toLowerCase())
    );

    setResults(filtrados);
  };

  return (
    <ScrollView style={{ paddingTop: 50 }}>
      <TextInput
        placeholder="Ingresa el nombre del pokemón"
        value={buscar}
        onChangeText={handleFiltro}
        style={{ 
          borderWidth: 1, 
          margin: 10, 
          padding: 12, 
          borderRadius: 8,
          borderColor: '#ccc' 
        }}
      />
      {results.length > 0 ? (
        results.map((item) => {
          return <PokemonCard key={item.name} name={item.name} URL={item.url} />;
        })
      ) : (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 16, color: 'gray' }}>
            No se encontró a "{buscar}"
          </Text>
        </View>
      )}
    </ScrollView>
  );
}