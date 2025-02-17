import React, { createContext } from "react";
import ComponentA from "./Components/ComponentA";

export const Data = createContext();

export default function App() {
  const name = "sidhu";

  return (
    <div>
      <Data.Provider value={name}>
        <ComponentA />
      </Data.Provider>
    </div>
  );
}
