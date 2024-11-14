import { useEffect, useState } from "react";
import { formatPokemonData } from "../utils/pokemon-helper";
import Loader from "./Loader";
import PokemonCard from "./PokemonCard";

const PokemonsContainer = ({ type }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const API_END_POINT = `https://pokeapi.co/api/v2/type/${type}`;
      const res = await fetch(API_END_POINT);
      const { pokemon: pokemonList } = await res.json();

      const pokemons = await Promise.all(
        pokemonList.map(async ({ pokemon }) => {
          const res = await fetch(pokemon.url);
          const data = await res.json();
          return formatPokemonData(data);
        })
      );

      setPokemons(pokemons);
      setLoading(false);
    };

    fetchPokemons();
  }, [type]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="pokemons-container">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonsContainer;
