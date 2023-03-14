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

  const buttonHandler = (e, idx) => {
    type ObjType = {
      [index: string]: string;
      고티수상작: string;
      "게임 전체 중에서": string;
      Y: string;
      N: string;
    };

    const filterGuide: ObjType = {
      고티수상작: "게임 전체 중에서",
      "게임 전체 중에서": "고티수상작",
      Y: "N",
      N: "Y",
    };

    const target = e.currentTarget;
    const className = e.target.classname;

    if (isSelectedContnet !== idx) {
      setBtnActive(idx);
      const arr = [...btnValue];
      const key = target.innerText;
      setBtnValue([
        ...arr.filter((e) => e !== filterGuide[key]),
        target.innerText,
      ]);
      // console.log(target.innerText);
      // setBtnValue([...btnValue, target.innerText]);
      //중복값 허용이 아닌 경우 기존의 값이 사라져야 하는데 그게 구현되어 있지 않아서 문제 발생
    } else {
      setBtnActive("");
      setBtnValue(btnValue.filter((e) => e !== target.innerText));
    }
  };

  const buttonChecker = (text: string) => {
    if (btnValue.find((e) => text === e) !== undefined) {
      return (isSelectedContnet = false);
    } else return (isSelectedContnet = true);
  };

  const dupleButtonHandler = (e) => {
    const target = e.currentTarget;
    const className = e.target.classname;
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
          {/* 중복허용 버튼 */}
          <button
            className={btnActive === idx ? styles.choiceActive : styles.choice}
            onClick={(e) => {
              handleClick(idx, e);
              dupleButtonHandler(e);
            }}
          >
            {text}
          </button>
        </>
      ) : (
        // 중복불가능 버튼
        <button
          className={
            isSelectedContnet === true ? styles.choiceActive : styles.choice
          }
          onClick={(e) => {
            handleClick(idx, e);
            buttonHandler(e, idx);
          }}
        >
          {text}
        </button>
      )}
    </>
  );
}
