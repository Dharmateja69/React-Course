import React, { useRef } from "react";
import TimerRef from "./Assignment/TimerRef";

export default function App() {
  const inputElement = useRef(null);

  const focus = () => {
    inputElement.current.focus();
    inputElement.current.value = "";
  };
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={focus}>Click to focus</button>
      <TimerRef />
    </div>
  );
}
