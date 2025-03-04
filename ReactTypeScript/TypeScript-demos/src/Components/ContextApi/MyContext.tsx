import { createContext, useState } from "react";

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

interface Myproviderprops {
  children: React.ReactNode;
}

const MyProvider = ({ children }: Myproviderprops) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(0);
  return (
    <MyContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
