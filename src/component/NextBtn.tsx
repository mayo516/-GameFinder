import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { btnValueState } from "./Button";
export default function NextBtn() {
  const btnValue = useRecoilValue(btnValueState);
  function runGameFinder() {
    console.log(btnValue);
  }

  return <div onClick={runGameFinder}>NextBtn</div>;
}
