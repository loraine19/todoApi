import Image from "next/image";
import styles from "./page.module.css";
import { category, preference } from '../../prisma/generated/client/index';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>MY FIRST API </h1>
        <a href="./api/users">users</a><br></br>
        <a href="./api/tasks">tasks</a><br></br>
        <a href="./api/categorys">categories</a><br></br>
        <a href="./api/preferences">preferences</a><br></br>
        <hr></hr>
      </main>
      <footer className={styles.footer}>
        <h4>Ou presque .... :(</h4>
      </footer>
    </div>
  );
}
