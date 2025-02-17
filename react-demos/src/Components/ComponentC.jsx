import React from "react";
import { Data, Data1 } from "../App";

const ComponentC = () => {
  return (
    <div>
      <Data.Consumer>
        {(name) => {
          // return <h1>{name}</h1>;
          return (
            <Data1.Consumer>
              {(age) => {
                return (
                  <h1>
                    My name is {name} and my age is {age}
                  </h1>
                );
              }}
            </Data1.Consumer>
          );
        }}
      </Data.Consumer>
    </div>
  );
};

export default ComponentC;

// Every time new data is added, updating the callback function becomes a problem. We can solve this issue using the useContext hook.
