//Create a form with input field for email. Validate the 'Email' field to ensure it follows a standard
//email format (e.g., name@example.com). Display an error message for invalid email formats.

import React, { useState } from "react";

export default function Program12() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (email === "") {
      alert("Please enter email");
    } else if (!regEx.test(email)) {
      alert("Invalid email");
    } else alert("Your email is " + email);
  };

  return (
    <div>
      <h1>-----12-----</h1>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
