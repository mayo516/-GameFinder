"use client";
import React from "react";
import Button from "./Button";
import { useEffect, useState } from "react";
import Question from "./Question";

export default function Main() {
  return (
    <main>
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
      />
      <Question text={"인생 게임이 있습니까?"} choiceText={["Y", "N"]} />
      <Question text={"좋아하는 게임을 입력하세요"} choiceText={[]} />
      <input />
    </main>
  );
}
