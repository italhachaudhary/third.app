//Build a basic registration form with fields for username, email, age, password, and confirmation
//password. Implement validations for required fields, minimum/maximum length of password,
//email format and allow only numeric input in the 'Age' field. Display an error message for a
//wrong input field

import React, { useState } from "react";

export default function Program15() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const checkPassword = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password and Confirm Password do not match");
    } else {
      setMessage("Registration Successful");
    }
  };

  return (
    <div>
      <h1>-----15-----</h1>
      <form onSubmit={checkPassword}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength="6"
          maxLength="12"
          required
        />
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          minLength="6"
          maxLength="12"
          required
        />
        <button type="submit">Register</button>
      </form>
      <h2>{message}</h2>
    </div>
  );
}
