import { List } from "./components/list";
import styles from "./page.module.css";

export default async function Home() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
  const pokemonlist = await data.json();
  console.log(pokemonlist);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Pokemon List</h1>
      <List />
    </main>
  );
}
