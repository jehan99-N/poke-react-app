import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { PokemonList } from "../fetures/pokemon/pokemonList";
import { PokemonDetail } from "../fetures/pokemon/pokemonDetail";

export const App: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  return (
    <Provider store={store}>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ width: "200px" }}>
          <PokemonList onSelect={setSelectedPokemon} />
        </div>
        <div style={{ flex: 1 }}>
          <PokemonDetail name={selectedPokemon} />
        </div>
      </div>
    </Provider>
  );
};
