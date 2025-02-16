import React, { useEffect, useState } from "react";

const BasicEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    setCount(count);
  }, []);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Click me</button>
    </div>
  );
};

export default BasicEffect;
