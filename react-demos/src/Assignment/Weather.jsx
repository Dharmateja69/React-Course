import React from "react";

const Weather = ({ temp }) => {
  if (temp < 15) {
    return <h1>Its cold outside</h1>;
  } else if (temp >= 15 && temp <= 25) return <h1>Its nice outside</h1>;
  else {
    return <h1>it hot outside</h1>;
  }
  return <div></div>;
};

export default Weather;
