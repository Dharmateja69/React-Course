import React from "react";
import Profile from "./Assignment/Profile";
import ShoppingList from "./Assignment/ShoppingList";
import Todoustate from "./Assignment/Todoustate";
import UStatecounter from "./Assignment/UStatecounter";

export default function App() {
  return (
    <div>
      <UStatecounter />
      <Todoustate />
      <Profile />
      <ShoppingList />
    </div>
  );
}
