import React, { createContext, useState } from "react";

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  // Fixed "childern" typo
  const [color, setColor] = useState("red");

  const update = (newColor) => {
    setColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ color, update }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorContext, ColorProvider };
