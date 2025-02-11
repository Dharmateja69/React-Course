import React, { useState } from "react";

export default function App() {
  const [obj, setobj] = useState({
    name: "sidhu",
    age: 23,
  });

  const handle = () => {
    setobj({ ...obj, age: 58 }); //before we will change the data we have to copy it useing the ...restoperator
  };

  return (
    <div>
      <h1>{obj.age}</h1>
      <h1>{obj.name}</h1>
      <button onClick={handle}>Click me</button>
    </div>
  );
}
