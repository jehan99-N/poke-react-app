import React from "react";
import { useGetPokemonListQuery } from "./pokemonApi";
import "./PokemonList.css";

interface Props {
  onSelect: (id: string) => void; 
}

const getPokemonImage = (url: string) => {
  const id = url.split("/").filter(Boolean).pop(); 
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

const getPokemonId = (url: string) => url.split("/").filter(Boolean).pop()!;

export const PokemonList: React.FC<Props> = ({ onSelect }) => {
  const { data, error, isLoading } = useGetPokemonListQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading Pokemon.</div>;

  return (
    <div className="pokemon-list-container">
      <h2 className="pokemon-title">PokeReact</h2>
      <ul className="pokemon-list">
        {data?.results.map((pokemon) => {
          const id = getPokemonId(pokemon.url);
          return (
            <li
              key={pokemon.name}
              onClick={() => onSelect(id)} 
              className="pokemon-item"
            >
              <img
                src={getPokemonImage(pokemon.url)}
                alt={pokemon.name}
                className="pokemon-image"
              />
              <span className="pokemon-name">{pokemon.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
