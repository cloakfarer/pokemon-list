import { TPokemon } from "@/models/PokeApi";
import { FC } from "react";
import styles from "./card.module.css";

type TProps = {
  pokemon: TPokemon;
};

export const Card: FC<TProps> = ({ pokemon }) => {
  return (
    <div className={styles.card} key={pokemon.id}>
      <div className={styles.row}>
        <h2>{pokemon.name}</h2>
        <span className={styles.id}>#{pokemon.id}</span>
      </div>
      {pokemon.sprites.front_default ? (
        <img
          src={pokemon.sprites.front_default}
          alt="Picture of a pokemon"
          className={styles.image}
        />
      ) : (
        <img
          src={"/image-unavailable.png"}
          alt="Picture of a pokemon"
          className={styles.image}
        />
      )}
      <div className={styles.types}>
        {pokemon.types.map((type) => {
          return (
            <span className={styles.type} key={type.type.name}>
              {type.type.name}
            </span>
          );
        })}
      </div>
      <div className={styles.row}>
        <span>Height: </span>
        <span>{pokemon.height * 10} cm</span>
      </div>
      <div className={styles.row}>
        <span>Weight: </span>
        <span>{pokemon.weight / 10} kg</span>
      </div>
    </div>
  );
};
