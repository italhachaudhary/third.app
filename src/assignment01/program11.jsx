//Create a form with input Field for Name. The form should not submit if the 'Name' field is
//empty. Display an error message if the field is empty.

import React, { useState } from "react";

export default function Program11() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Please enter the name");
    }
  };

  return (
    <div>
      <h1>-----11-----</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
