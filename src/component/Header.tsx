import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <header className={styles.container}>
        <h1 className={styles.programName}>게임파인더 1.0</h1>
        <nav>
          <button className={styles.btn}>?</button>
          <button className={styles.btn}>x</button>
        </nav>
      </header>
    </>
  );
}
