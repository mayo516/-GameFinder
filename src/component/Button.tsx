import React from "react";
import styles from "./Button.module.scss";

export default function Button({
  text,
  btnType,
  key,
}: {
  text: string;
  btnType: string;
  key: number;
}) {
  return (
    <>
      {btnType === "title" ? (
        <button className={styles.title}>{text}</button>
      ) : (
        <button className={styles.choice}>{text}</button>
      )}
    </>
  );
}
