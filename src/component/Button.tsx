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
  isSelectedContnet,
  handleClick,
  duplication,
}: // key,
{
  text: string;
  btnType: string;
  idx: string;
  isSelectedContnet: boolean;
  duplication: boolean;

  // key: number;
}) {
  const btnValueState = atom({
    key: "btnValueState", // unique ID (with respect to other atoms/selectors)
    default: [""], // default value (aka initial value)
  });

  type CustomMouseEvent = MouseEvent<HTMLElement>;
  const [btnActive, setBtnActive] = useState("");
  const [btnValue, setBtnValue] = useRecoilState(btnValueState);

  // console.log(btnValue);
  const buttonHandler = (e) => {
    const target = e.currentTarget;
    if (btnActive !== idx) {
      setBtnActive(idx);
      setBtnValue([...btnValue, target.innerText]);
    } else {
      setBtnActive("");
      setBtnValue(btnValue.filter((e) => e !== target.innerText));
    }
  };
  // console.log(btnValue);
  return (
    <>
      {btnType === "title" ? (
        <button className={styles.title}>{text}</button>
      ) : duplication === true ? (
        <>
          <button
            className={btnActive === idx ? styles.choiceActive : styles.choice}
            onClick={(e) => {
              handleClick(idx);
              buttonHandler(e);
            }}
          >
            {text}
          </button>
        </>
      ) : (
        <button
          className={
            isSelectedContnet === true ? styles.choiceActive : styles.choice
          }
          onClick={(e) => {
            handleClick(idx);
            buttonHandler(e);
          }}
        >
          {text}
        </button>
      )}
    </>
  );
}
