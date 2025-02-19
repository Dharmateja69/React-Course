import React, { useId } from "react";

const UniqueId = () => {
  const id = useId(); // Generate a unique ID

  return (
    <div>
      <label htmlFor={id}>Enter Name: </label>
      <input type="text" id={id} />
    </div>
  );
};

export default UniqueId;
