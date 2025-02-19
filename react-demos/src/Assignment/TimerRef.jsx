import React, { useEffect, useRef, useState } from "react";

const TimerRef = () => {
  const [count, setcount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setcount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Counter:{count} seconds</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop timer
      </button>
    </div>
  );
};

export default TimerRef;
