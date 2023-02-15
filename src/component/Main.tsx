"use client";
import React from "react";
import Button from "./Button";
import { useEffect, useState } from "react";

export default function Main() {
  const [QuestionList, setQuestionList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/QuestionAPI")
      .then((type) => type.json())
      .then((result) => {
        setQuestionList(result);
      });
  }, []);
  return (
    <>
      {QuestionList.map((res) => {
        return <Button text={res["title"]} btnType="title" />;
      })}
      <main>메인입니다</main>
    </>
  );
}
