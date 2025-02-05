import React from "react";

const Greets = () => {
  const name = "jhon";
  const date = new Date();
  return (
    <div>
      <h1>hi man {name} nyc name!!</h1>
      <h1>This is ur :{date.getDate()}</h1>
    </div>
  );
};

export default Greets;
