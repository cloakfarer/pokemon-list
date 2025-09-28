import { Suspense } from "react";
import { List } from "./components/list/list";
import styles from "./page.module.css";
import { Loader } from "./components/loader/loader";

export default async function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Pokémon List</h1>
      <Suspense fallback={<Loader />}>
        <List />
      </Suspense>
    </main>
  );
}
