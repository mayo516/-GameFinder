"use client";
import React from "react";
import Header from "@/component/Header";
import Main from "@/component/Main";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
export default function window() {
  return (
    <>
      <RecoilRoot>
        <Header />
        <Main />
      </RecoilRoot>
    </>
  );
}
