import React from "react";
import { MouseEvent } from "react";
import styles from "./Button.module.scss";
import { useEffect, useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  RecoilEnv,
} from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

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
  const btnValueState = atom({
    key: "btnValueState", // unique ID (with respect to other atoms/selectors)
    default: [""], // default value (aka initial value)
  });
  const [btnActive, setBtnActive] = useState("");
  const [btnValue, setBtnValue] = useRecoilState(btnValueState);

  const buttonHandler = () => {
    btnActive !== "" ? setBtnActive("") : setBtnActive(idx);
    console.log(btnActive);
  };

  const buttonClickHandler = (e: CustomMouseEvent) => {
    const target = e.currentTarget;
    if (btnActive !== "") {
      setBtnValue([...btnValue, target.innerText]);
    } else {
      setBtnValue(btnValue.filter((e) => e !== target.innerText));
    }

    console.log(btnValue);
  };

  type CustomMouseEvent = MouseEvent<HTMLElement>;

  return (
    <>
      {btnType === "title" ? (
        <button className={styles.title}>{text}</button>
      ) : (
        <button
          className={idx === btnActive ? styles.choiceActive : styles.choice}
          onClick={(e) => {
            buttonHandler();
            buttonClickHandler(e);
            // console.log(e.target.innerText);
          }}
        >
          {text}
        </button>
      )}
    </>
  );
}
