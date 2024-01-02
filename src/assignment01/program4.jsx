//Implement the functionality to find maximum and minimum values in an array. Take input for
//the array, a button to do functionality and after show numbers array using conditional
//rendering.

import React, { useState } from "react";

export default function Program4() {
  const [numbers, setNumbers] = useState("");
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");

  const findMaxMin = () => {
    let max = numbers[0];
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      if (max < numbers[i]) {
        max = numbers[i];
      }
      if (min > numbers[i]) {
        min = numbers[i];
      }
    }
    setMax(max);
    setMin(min);
  };

  return (
    <div>
      <h1>-----04-----</h1>
      <input
        type="text"
        value={numbers}
        placeholder="Enter numbers separated by comma"
        onChange={(e) => setNumbers(e.target.value.split(","))}
      />
      <button onClick={findMaxMin}>Find Max Min</button>
      <h2>Max: {max}</h2>
      <h2>Min: {min}</h2>
    </div>
  );
}
