//Implement sorting functionality for an array of numbers. Take input for the array, a button to do
//functionality of sorting and after sorting show sorted array using conditional rendering. This
//involves manipulating the state based on user interactions.

import React, { useState } from "react";

export default function Program5() {
  const [numbers, setNumbers] = useState("");
  const [sortedNumbers, setSortedNumbers] = useState("");

  const sortNumbers = () => {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
          let temp = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = temp;
        }
      }
    }
    setSortedNumbers(numbers);
  };

  return (
    <div>
      <h1>-----05-----</h1>
      <input
        type="text"
        value={numbers}
        placeholder="Enter numbers separated by comma"
        onChange={(e) => setNumbers(e.target.value.split(","))}
      />
      <button onClick={sortNumbers}>Sort Numbers</button>
      <h2>Sorted Numbers: {sortedNumbers}</h2>
    </div>
  );
}
