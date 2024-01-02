//Create a program that take a string and then by clicking on a button reverses the string and
//converts it to uppercase/lowercase. Reverse string using loop, not by any built-in method.

import React, { useState } from "react";

export default function Program1() {
  const [str1, setStr1] = useState("Talha");
  const [str2, setStr2] = useState("");

  const result = () => {
    let reverse = "";
    for (let i = str1.length - 1; i >= 0; i--) {
      reverse = reverse + str1[i];
    }
    setStr2(reverse);
  };

  return (
    <div>
      <h1>-----01-----</h1>
      <h2>{str1}</h2>
      <button onClick={result}>Reverse</button>
      <h2>{str2.toLowerCase()}</h2>
      <h2>{str2.toUpperCase()}</h2>
    </div>
  );
}
