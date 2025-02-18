import React, { useReducer, useState } from "react";
import { Counterreducer, initialState } from "./CounterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(Counterreducer, initialState);
  const [inputvalue, setnewvalue] = useState(0);
  return (
    <div>
      <h1>Counter:{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <input
        type="number"
        value={inputvalue}
        placeholder="enter the number"
        onChange={(e) => setnewvalue(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "incrementByAmount", payload: Number(inputvalue) });
          setnewvalue(""); // Clears the input field after submission
        }}
      >
        incrementBYamount
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrementByAmount", payload: Number(inputvalue) });
          setnewvalue("");
        }}
      >
        decrementBYamount
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;
