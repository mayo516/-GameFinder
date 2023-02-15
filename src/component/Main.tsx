"use client";
import React from "react";
import Button from "./Button";
import { useEffect, useState } from "react";

const ListMaker = () => {
  for (let i = 0; i < 3; i++) {
    return (
      <>
        <Button text="버튼" btnType="title" />
        <Button text="버튼" btnType="choice" />
      </>
    );
  }
};

export default function Main() {
  const [QuestionList, setQuestionList] = useState("");
  const a1: string[] = [];
  useEffect(() => {
    fetch("http://localhost:3000/api/QuestionAPI")
      .then((type) => type.json())
      .then((result) => {
        for (let objkey in result) {
          a1.push(objkey);
        }
        setQuestionList(result);
      });
  }, []);
  console.log(QuestionList);

  return (
    <>
      <main>메인입니다</main>
    </>
  );
}
