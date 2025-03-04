import { FC, useContext } from "react";
import { MyContext } from "./MyContext";

const Counter: FC = () => {
  const { count, increment, decrement, reset } = useContext(MyContext);
  return (
    <div>
      <h2>counter:{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Counter;
