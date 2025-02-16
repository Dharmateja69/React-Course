import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {}, []); //this empty {},[]) mean this method will run for one time
  return <div></div>;
};

export default UseEffect;
