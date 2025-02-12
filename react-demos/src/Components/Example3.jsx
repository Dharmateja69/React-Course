import React, { useEffect, useState } from "react";

const Example3 = () => {
  const [name, setname] = useState(() => {
    const savename = localStorage.getItem("name");
    return savename ? JSON.parse(savename) : "";
  });

  useEffect(() => {
    //Accepts a function that contains imperative, possibly effectful code.

    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);
  const handeleChange = (event) => {
    setname(event.target.value);
  };

  const handleclear = () => setname("");

  return (
    <div>
      <h1>Your name:{name}</h1>
      <input
        type="text"
        value={name}
        onChange={handeleChange}
        placeholder="Enter your name"
      />
      <button onClick={handleclear}>clear Name</button>
    </div>
  );
};

export default Example3;
