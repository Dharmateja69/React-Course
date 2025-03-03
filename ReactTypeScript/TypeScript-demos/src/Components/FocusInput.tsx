import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter the name" />
      <button onClick={() => inputRef.current?.focus()}>Focus</button>
    </div>
  );
};

export default FocusInput;
