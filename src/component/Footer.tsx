"use client";
import React from "react";
import handleSubmit from "../lib/api_request/chatgpt";
export default function Footer() {
  return (
    <>
      <footer onClick={handleSubmit}>푸터입니다</footer>
    </>
  );
}
