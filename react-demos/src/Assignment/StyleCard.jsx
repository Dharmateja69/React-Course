import React from "react";

const StyleCard = ({ children }) => {
  const style = {
    backgroundColor: "lightblue",
    padding: "20px",
    borderRadius: "10px",
    color: "darkblue",
  };
  return <div style={style}>{children}</div>;
};

export default StyleCard;
