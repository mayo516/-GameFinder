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
    if (btnValue.length === 1) {
      alert("선택을 해주세요");
    } else {
      const postContent: string =
        btnValue.join("이고").substr(2) + "인 게임 중에서 추천해줘 ";

      handleSubmit(postContent).then((res) => {
        setAnswer(res);
      });
    }
  }

  return <div onClick={runGameFinder}>NextBtn</div>;
}
