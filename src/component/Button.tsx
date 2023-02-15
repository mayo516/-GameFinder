import React from "react";
import styles from "./Button.module.scss";

export default function Button({
  text,
  btnType,
}: {
  text: string;
  btnType: string;
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
