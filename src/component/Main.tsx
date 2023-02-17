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
      <Question text={"게임분류선택"} choiceText={[]} />
      <Question text={"게임분류선택"} choiceText={[]} />
      <Question text={"게임분류선택"} choiceText={[]} />
    </main>
  );
}
