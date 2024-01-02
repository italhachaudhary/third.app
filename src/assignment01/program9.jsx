//Develop a calculator for basic geometry computations like area of rectangles, triangles, or
//circles.
import React, { useState } from "react";

export default function Program9() {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);

  const [height, setHeight] = useState(0);
  const [base, setBase] = useState(0);

  const [radius, setRadius] = useState(0);

  const [area, setArea] = useState(0);

  const calculateRectangleArea = () => {
    setArea(length * width);
  };

  const calculateTriangleArea = () => {
    setArea((height * base) / 2);
  };

  const calculateCircleArea = () => {
    setArea(Math.PI * radius * radius);
  };

  return (
    <div>
      <h1>-----09-----</h1>
      <h2>Area of Rectangle</h2>
      <input
        type="number"
        onChange={(e) => {
          setLength(parseFloat(e.target.value));
        }}
      />
      <input
        type="number"
        onChange={(e) => {
          setWidth(parseFloat(e.target.value));
        }}
      />
      <button onClick={calculateRectangleArea}>Calculate Rectangle Area</button>

      <h2>Area of Triangle</h2>
      <input
        type="number"
        onChange={(e) => {
          setHeight(parseFloat(e.target.value));
        }}
      />
      <input
        type="number"
        onChange={(e) => {
          setBase(parseFloat(e.target.value));
        }}
      />
      <button onClick={calculateTriangleArea}>Calculate Triangle Area</button>

      <h2>Area of Circle</h2>
      <input
        type="number"
        onChange={(e) => {
          setRadius(parseFloat(e.target.value));
        }}
      />
      <button onClick={calculateCircleArea}>Calculate Circle Area</button>
      <h2>Area: {area}</h2>
    </div>
  );
}
