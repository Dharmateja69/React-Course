import React, { useState } from "react";

const Todoustate = () => {
  const [todos, setTodos] = useState([]);
  const [input, setinputvalue] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, input]);
      setinputvalue("");
    }
  };

  const handlechange = (e) => {
    setinputvalue(e.target.value);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handlesubmit}>
        <input
          value={input}
          onChange={handlechange}
          placeholder="enter the list todo"
          type="text"
        />
        <button type="submit">Add todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todoustate;
