import React from "react";

// const Propes = (props) => {// we can write this in other format.
const Propes = ({ name, age, work }) => {
  //after destructing the props
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>age:{age}</h1>
      <h1>work:{work}</h1>
    </div>
  );
};

export default Propes;
