import React from "react";
import Button from "./Button";
import { useEffect, useState } from "react";

const BtnMaker = () => {
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
        [res["answerList"]] &&
          res["answerList"].map((innerEl: string, index: number) => {
            <Button text={innerEl} btnType="choice" key={index} />;
          });
      })}
    </>
  );
};

export default function Question() {
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
        return (
          <>
            <Button key={res["id"]} text={res["title"]} btnType="title" />
            <BtnMaker />
          </>
        );
      })}
    </>
  );
}
