import { fetchPokemonRange } from "@/lib/pokeapi";
import { List } from "./components/list";
import styles from "./page.module.css";

export default async function Home() {
  const ids = Array.from({ length: 20 }, (_, i) => i + 1);
  const pokemon = await fetchPokemonRange(ids);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Pokemon List</h1>
      <List pokemonList={pokemon} />
    </main>
  );
}
