import React, { useState } from "react";
import "../P-2/style.css";
const ToDo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setinput] = useState("");
  const handlsubmit = (e) => {
    e.preventDefault();
    if (input.trim() != "") {
      setTodo([...todo, input]);
      setinput("");
    }
  };

  return (
    <div className="container">
      <h4>ToDo List</h4>
      <br />
      <input
        type="text"
        value={input}
        placeholder="Enter Todo "
        onChange={(e) => setinput(e.target.value)}
      />
      <button type="submit" onClick={handlsubmit}>
        Todo
      </button>
      <ul className="todo-list">
        {todo.map((item) => (
          <li className="todo" key={Math.random()}>
            <span>{item}</span>
            <button
              className="close"
              onClick={() => setTodo(todo.filter((t) => t !== item))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
