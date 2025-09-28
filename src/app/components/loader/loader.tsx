import Image from "next/image";
import { FC } from "react";
import styles from "./loader.module.css";

export const Loader: FC = () => {
  return (
    <div className={styles.wrap} aria-label="Loading">
      <Image
        src="/pokeball.png"
        alt="Pokéball"
        width={64}
        height={64}
        className={styles.ball}
        unoptimized
      />
    </div>
  );
};
