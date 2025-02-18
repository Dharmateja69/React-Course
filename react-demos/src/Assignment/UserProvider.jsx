import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Jhon Doe", age: 23 });

  const updateUser = (newName) => {
    setUser((p) => ({ ...p, name: newName })); //copying the previouse data
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

// UserContext is created using createContext().
// UserProvider manages the user state (name: "Jhon Doe") using useState().
// updateUser(newName) updates the user's name.
// UserContext.Provider provides user and updateUser to child components.
// Any component inside UserProvider can access and modify the user's name easily.
