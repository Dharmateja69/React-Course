import React from "react";

const Greetinf = ({ timeofDay }) => {
  if (timeofDay === "morning") {
    return <h1>Good morning!</h1>;
  } else {
    return <h1>Good afternoon!</h1>;
  }
  return <div></div>;
};

export default Greetinf;
