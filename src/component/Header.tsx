import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
export default function Header() {
  return (
    <>
      <header className={styles.container}>
        <a>
          <Image
            className={styles.favi}
            src="/favicon.ico"
            alt="게임파인더 로고"
            width={16}
            height={16}
          />
        </a>
        <h1 className={styles.programName}>게임파인더 1.0</h1>
        <nav>
          <button className={styles.btn}>?</button>
          <button className={styles.btn}>x</button>
        </nav>
      </header>
    </>
  );
}
