import React from "react";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import ComponentC from "./Components/ComponentC";

export default function App() {
  const name = "sidhu";
  return (
    <div>
      <ComponentA name={name} />
      <ComponentB name={name} />
      <ComponentC name={name} />
    </div>
  );
}
