import React from "react";
import { useGetPokemonDetailQuery } from "./pokemonApi";
import "./PokemonDetail.css";

interface Props {
  name: string | null;
}

export const PokemonDetail: React.FC<Props> = ({ name }) => {
  const { data, error, isLoading } = useGetPokemonDetailQuery(name!, { skip: !name });

  console.log("the data detail pokemon:", data);
// If you want to log the id, just access it directly if data exists
if (data) {
  console.log(data?.id); 
}
  if (!name) return <div></div>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading details.</div>;

  return (
    <div className="pokemon-detail">
      <h2 className="pokemon-title">{data?.name}</h2>
      <div className="pokemon-content">
        <img src={data?.sprites.front_default} alt={data?.name} className="pokemon-image" />
        <table className="pokemon-table">
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{data?.name}</td>
            </tr>
            <tr>
              <td>Height:</td>
              <td>{data?.height}</td>
            </tr>
            <tr>
              <td>Weight:</td>
              <td>{data?.weight}</td>
            </tr>
            <tr>
              <td>Types:</td>
              <td>{data?.types.map((t) => t.type.name).join(" , ")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
