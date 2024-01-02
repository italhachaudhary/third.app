//Design a simple login page with a password input field. Implement logic for checking if the
//entered password matches a pre-defined value (array of passwords), displaying messages
//entered password is correct or not.

import React, { useState } from "react";

export default function Program14() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const checkPassword = (e) => {
    e.preventDefault();
    const passwords = ["abc123", "123456", "qwerty"];
    if (passwords.includes(password)) {
      setMessage("Password is correct");
    } else {
      setMessage("Password is incorrect");
    }
  };

  return (
    <div>
      <h1>-----14-----</h1>
      <form onSubmit={checkPassword}>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Check Password</button>
      </form>
      <h2>{message}</h2>
    </div>
  );
}
