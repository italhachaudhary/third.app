//Implement a simple authentication flow, confirm that two password fields match (useful in
//scenarios like password confirmation).

import React, { useState } from "react";

export default function Program13() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "" || confirmPassword === "") {
      alert("Please enter password");
    } else if (password !== confirmPassword) {
      alert("Password does not match");
    } else {
      alert("Password match");
    }
  };

  return (
    <div>
      <h1>-----13-----</h1>
      <form onSubmit={handleSubmit}>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label>Confirm Password: </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
