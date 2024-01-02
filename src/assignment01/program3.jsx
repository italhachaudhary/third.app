//Create a program that take a number from input and a button that calculate the factorial of the
//given number and then show the result.

import React, { useState } from "react";

export default function Program3() {
  const [number, setNumber] = useState("");
  const [factorial, setFactorial] = useState("");

  const calculateFactorial = () => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    setFactorial(result);
  };

  return (
    <div>
      <h1>-----03-----</h1>
      <input
        type="number"
        value={number}
        placeholder="Enter a number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={calculateFactorial}>Calculate Factorial</button>
      <h2>Factorial: {factorial}</h2>
    </div>
  );
}
