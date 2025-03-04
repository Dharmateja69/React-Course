import React, { createContext, useState } from "react";

interface MycontextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const MyContext = createContext<MycontextProps>({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {},
});
// Use null to prevent TypeScript errors

interface MyProviderProps {
  children: React.ReactNode;
}

const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <MyContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
