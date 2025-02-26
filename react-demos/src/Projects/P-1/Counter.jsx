import React, { useState } from "react";
import "../P-1/Style.css";
const Counter = () => {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount((count) => count + 1);
  };
  const decrement = () => {
    setcount((prev) => prev - 1);
  };

  return (
    <div className="container">
      <div className="number">{count}</div>

      <div className="btns-container">
        <button onClick={increment} className="increment">
          +
        </button>
        <button onClick={decrement} className="increment">
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
