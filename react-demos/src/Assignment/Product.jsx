import React from "react";

const Product = (props) => {
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <h1>Price:{props.price}</h1>
    </div>
  );
};

export default Product;
