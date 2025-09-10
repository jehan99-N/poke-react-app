import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pokemon, PokemonDetail } from "./types";

const BASE_URL = process.env.REACT_APP_BASE_API_URL || "https://pokeapi.co/api/v2/";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<{ results: Pokemon[] }, number | void>({
      query: (limit = 20) => `pokemon?limit=${limit}`,
    }),
    getPokemonDetail: builder.query<PokemonDetail, string>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailQuery } = pokemonApi;
