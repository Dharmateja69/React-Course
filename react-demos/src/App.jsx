import React from "react";

const Button = () => {
  const handleclick = () => {
    console.log("click me ", Math.round(Math.random() * 10));
  };

  return (
    <h1>
      <button onClick={handleclick}>Click</button>
    </h1>
  );
};

export default function App() {
  return (
    <div>
      <Button />
    </div>
  );
}
