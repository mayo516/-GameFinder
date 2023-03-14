import React from "react";
import handleSubmit from "../lib/api_request/chatgpt";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { btnValueState } from "./Button";
export default function NextBtn({ setAnswer }) {
  const btnValue = useRecoilValue(btnValueState);
  function runGameFinder(e) {
    const postContent: string =
      btnValue.join("이고").substr(2) + "인 게임 중에서 추천해줘 ";
    // console.log(postContent);
    handleSubmit(postContent).then((res) => {
      setAnswer(res);
      console.log(res);
    });

    // console.log(btnValue);
  }

  return <div onClick={runGameFinder}>NextBtn</div>;
}
