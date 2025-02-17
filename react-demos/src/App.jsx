import React, { createContext } from "react";
import ComponentA from "./Components/ComponentA";

export const Data = createContext();
export const Data1 = createContext();

export default function App() {
  const name = "sidhu";
  const age = 22;

  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
}
