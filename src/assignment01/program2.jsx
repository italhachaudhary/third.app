//Create a program that take a string and then check the input is a palindrome or not. Show the
//message based on result.

import React from "react";

export default function Program2() {
  let str1 = "civic";
  let str2 = "";

  for (let i = str1.length - 1; i >= 0; i--) {
    str2 += str1[i];
  }
  return (
    <div>
      <h1>-----02-----</h1>
      <h2>{str1}</h2>
      {str1 === str2 ? <h2>is Palindrome</h2> : <h2>is not Palindrome</h2>}
    </div>
  );
}
