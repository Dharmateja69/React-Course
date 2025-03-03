import { useState } from "react";
import Userprofile from "./Components/Userprofile";
import TodoList from "./Components/TodoList";

function App() {
  const [user, setuser] = useState<Object>({
    name: "Jack",
    age: 25,
  });

  return (
    <div>
      <Userprofile user={user} />
      <TodoList />
    </div>
  );
}

export default App;
