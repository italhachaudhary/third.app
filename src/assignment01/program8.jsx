//Design a simple calculator that performs basic arithmetic operations like addition, subtraction,
//multiplication, and division. This involves handling user input, validating numbers, calculating
//results based on chosen operations.

import React, { useState } from "react";

export default function Program8() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();

  const add = () => {
    setResult(num1 + num2);
  };
  const subtract = () => {
    setResult(num1 - num2);
  };
  const multiply = () => {
    setResult(num1 * num2);
  };
  const divide = () => {
    setResult(num1 / num2);
  };

  return (
    <div>
      <h1>-----08-----</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => {
          setNum1(parseFloat(e.target.value));
        }}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => {
          setNum2(parseFloat(e.target.value));
        }}
      />
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>
      <h2>Result: {result}</h2>
    </div>
  );
}
