import { fetchPokemonRange } from "@/lib/pokeapi";
import { FC } from "react";
import { Card } from "../card/card";
import styles from "./list.module.css";

export const List: FC = async () => {
  const ids = Array.from({ length: 20 }, (_, i) => i + 1);
  const pokemonList = await fetchPokemonRange(ids);

  return (
    <div className={styles.list}>
      {pokemonList.map((pokemon) => {
        return <Card pokemon={pokemon} key={pokemon.id} />;
      })}
    </div>
  );
};
