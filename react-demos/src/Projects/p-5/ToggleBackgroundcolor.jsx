import React, { useState } from "react";

const ToggleBackgroundcolor = () => {
  const [color, setcolor] = useState("white");
  const togllecolor = () => {
    setcolor(color === "white" ? "black" : "white");
  };

  return (
    <div
      style={{
        backgroundColor: color === "white" ? "white" : "black",
        color: color === "white" ? "black" : "white",
        padding: "100px", // Adjust padding as needed
        margin: "100px",
        textAlign: "center",
        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)", // Adjust margin as needed
      }}
    >
      <section className="content">
        <h1>{color}</h1>
      </section>
      <section>
        <button value={color} onClick={togllecolor}>
          Toggle
        </button>
      </section>
    </div>
  );
};

export default ToggleBackgroundcolor;
