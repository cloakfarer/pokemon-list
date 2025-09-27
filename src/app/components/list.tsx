import { TPokemon } from "@/models/PokeApi";
import { FC } from "react";
import { Card } from "./card";
import styles from "./list.module.css";

type TProps = {
  pokemonList: TPokemon[];
};

export const List: FC<TProps> = ({ pokemonList }) => {
  return (
    <div className={styles.list}>
      {pokemonList.map((pokemon) => {
        return <Card pokemon={pokemon} key={pokemon.id} />;
      })}
    </div>
  );
};
