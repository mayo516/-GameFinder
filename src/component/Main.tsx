"use client";
import React from "react";
import Button from "./Button";
import NextBtn from "./NextBtn";
import { useEffect, useState } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Question from "./Question";
import styles from "./Main.module.scss";
export const answerState = atom({
  key: "answerState", // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});
export default function Main() {
  const [answer, setAnswer] = useState(undefined);

  if (answer === undefined) {
    return (
      <main className={styles.Wrapper}>
        <Question
          text={"게임분류선택"}
          choiceText={["고티수상작", "게임 전체 중에서"]}
        />
        <Question
          text={"선호 하는 장르 (중복 선택 가능)"}
          choiceText={[
            "RPG",
            "MMOPRG",
            "액션",
            "샌드박스",
            "FPS",
            "RTS",
            "딱히 없음",
          ]}
          duplication={true}
        />
        <Question text={"인생 게임이 있습니까?"} choiceText={["Y", "N"]} />
        <Question text={"좋아하는 게임을 입력하세요"} choiceText={[]} />
        <input className={styles.answerForm} />
        <NextBtn setAnswer={setAnswer} />
      </main>
    );
  } else {
    return (
      <main className={styles.Wrapper}>
        <h2 className={styles.title}>다음 게임을 추천합니다!</h2>
        <p>{answer}</p>
      </main>
    );
  }
}
