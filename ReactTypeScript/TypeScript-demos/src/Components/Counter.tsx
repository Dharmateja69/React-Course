import { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState<number>(0);
  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };
  const reset = () => {
    setcount(0);
  };
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
