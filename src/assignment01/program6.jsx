// Create a simple counter app with buttons to increment and decrement the counter value. This
//helps you practice state management and event handling.

import React, { useState } from "react";

export default function Program6() {
  const [count, setCount] = useState();

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>-----06-----</h1>
      <button onClick={decrement}>Decrement</button>
      <input
        type="number"
        value={count}
        onChange={(e) => {
          setCount(parseFloat(e.target.value));
        }}
      />
      <button onClick={increment}>Increment</button>
    </div>
  );
}
