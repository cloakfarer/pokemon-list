import { TPokemon } from "@/models/PokeApi";
import { FC } from "react";

type TProps = {
  pokemonList: TPokemon[];
};

export const List: FC<TProps> = ({ pokemonList }) => {
  return (
    <div>
      {pokemonList.map((pokemon) => {
        return (
          <div className="pokemon-card" key={pokemon.id}>
            <h2>{pokemon.name}</h2>
            <p>{pokemon.id}</p>
          </div>
        );
      })}
    </div>
  );
};
