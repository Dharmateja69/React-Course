import React, { useContext } from "react";
import { Data, Data1 } from "../App";

const ComponentC = () => {
  const username = useContext(Data);
  const Age = useContext(Data1);
  return (
    <div>
      <h1>
        My name is {username} and this is my age {Age}
      </h1>
    </div>
  );
};

export default ComponentC;

//Every time new data is added, updating the callback function becomes a problem. We can solve this issue using the useContext hook.

// useContext() eliminates the need to pass props manually through multiple components.
// It allows direct access to shared data from the context provider.
// This makes the code cleaner, more readable, and easier to manage.
