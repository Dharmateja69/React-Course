import React, { useState } from "react";

export default function App() {
  const [frined, setfriend] = useState(["sdhu", "sjfkd"]);
  const addfriend = () => {
    setfriend([...frined, "dharmateja"]); //at first we have to copy the existing data using the restoperator ...name,
  };
  const remove = () => {
    setfriend([...frined]);
  };
  return (
    <div>
      {frined.map((item) => (
        <li key={Math.random()}>{item}</li>
      ))}
      <button onClick={addfriend}>Add more friends</button>
      <button onClick={remove}>Remove the friend</button>
    </div>
  );
}
// like wise we can add different types of methods like update, delete, etc....
