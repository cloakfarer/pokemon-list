import { TPokemon } from "@/models/PokeApi";
import Image from "next/image";
import { FC } from "react";
import styles from "./card.module.css";
import { TypeChip } from "../type-chip/type-chip";

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
        <Image
          src={pokemon.sprites.front_default}
          alt="Picture of a Pokémon"
          className={styles.image}
          width="100"
          height="100"
          unoptimized
        />
      ) : (
        <Image
          src={"/image-unavailable.png"}
          alt="Image not available"
          className={styles.image}
          width="100"
          height="100"
          unoptimized
        />
      )}
      <div className={styles.types}>
        {pokemon.types.map((type) => {
          return <TypeChip type={type.type.name} key={type.type.name} />;
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
