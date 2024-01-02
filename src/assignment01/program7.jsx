//Design an application that includes an input field for users to input values, accompanied by two
//interactive buttons: one for adding the entered value to an array and another for removing
//values from the array. The application should dynamically display the updated array, providing
//users with a clear and real-time representation of the array's contents as they manipulate it
//using the add and remove functionalities.

import React, { useState } from "react";

export default function Program7() {
  const [numbers, setNumbers] = useState("");
  const [numbersArray, setNumbersArray] = useState([]);

  const addNumbers = () => {
    setNumbersArray([...numbersArray, numbers]);
  };

  const removeNumbers = () => {
    setNumbersArray(numbersArray.slice(0, -1));
  };

  return (
    <div>
      <h1>-----07-----</h1>
      <button onClick={removeNumbers}>Remove</button>
      <input
        type="text"
        value={numbers}
        onChange={(e) => {
          setNumbers(e.target.value);
        }}
      />
      <button onClick={addNumbers}>Add</button>
      <h2>
        Numbers:{" "}
        {numbersArray.map((number, index) => (
          <span key={index}>{number},</span>
        ))}
      </h2>
    </div>
  );
}
