import React, { useEffect, useState } from "react";
//we setupt useeffect hook to eun some code when
//  Component renders for the (First Time)
// and WHENEVER it re-renders
// & some data in our component changed
const UseEffect = () => {
  const [value, setvalue] = useState(0);
  const [something, setsomething] = useState(0);

  //   useEffect(() => {
  //     console.log("call useEffect !!");
  //     document.title = `Increment ${value}`;
  //   }, []); //here we have to provide one array which can be of empty , or we can pass the value [value],[] reason is that if we will not provide with the [] for every increment of the value the useeffect will be called .
  useEffect(() => {
    console.log("call useEffect !!");
    document.title = `Increment ${value}`;
  }, [value]); //if we pass only [value] then the something value will not call to the useEffect method if we pass it [value,something]-> here it will be able to call to the useEffect as like value.
  return (
    <div>
      <h2>{value}</h2>
      <button onClick={() => setvalue(value + 1)}>click me</button>
      <button onClick={() => setsomething(value + 1)}>Something</button>
    </div>
  );
};

export default UseEffect;
