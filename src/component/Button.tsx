import React from "react";
import styles from "./Button.module.scss";
import { useEffect, useState } from "react";
export default function Button({
  text,
  btnType,
  idx,
}: // key,
{
  text: string;
  btnType: string;
  idx: string;

  // key: number;
}) {
  const [btnActive, setBtnActive] = useState("");
  const buttonHandler = () => {
    setBtnActive(idx);
    console.log(idx);
  };
  return (
    <>
      {btnType === "title" ? (
        <button className={styles.title}>{text}</button>
      ) : (
        <button
          className={idx === btnActive ? styles.choiceActive : styles.choice}
          onClick={buttonHandler}
        >
          {text}
        </button>
      )}
    </>
  );
}
