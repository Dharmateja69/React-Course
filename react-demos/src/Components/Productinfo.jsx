import React from "react";

const Productinfo = () => {
  const obj = {
    name: "laptop",
    price: "$200",
    availability: "In stock",
  };
  return (
    <div>
      <h1>This is the object details</h1>
      <h2>Name:{obj.name}</h2>
      <h2>Price:{obj.price}</h2>
      <h2>Availability:{obj.availability}</h2>
    </div>
  );
};

export default Productinfo;
