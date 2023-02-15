"use client";
import React from "react";
import Button from "./Button";
import { useEffect, useState } from "react";
import Question from "./Question";

export default function Main() {
  return (
    <main>
      <Question />
      <Question />
      <Question />
      <Question />
    </main>
  );
}
