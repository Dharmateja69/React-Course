import React, { useReducer } from "react";

const themreducer = (state, action) => {
  switch (action.type) {
    case "Toggle":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};

const Themetoggler = () => {
  const [theme, dispatch] = useReducer(themreducer, "light");
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
        padding: "100px",
        textAlign: "center",
      }}
    >
      <h2>current Theme:{theme}</h2>
      <button onClick={() => dispatch({ type: "Toggle" })}>Toggle</button>
    </div>
  );
};

export default Themetoggler;
