import { List } from "./components/list";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Pokemon List</h1>
      <List />
    </main>
  );
}
