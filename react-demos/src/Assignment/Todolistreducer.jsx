import React, { useReducer, useState } from "react";

const Todoreducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload }];
    case "delete":
      return state.filter((key) => key.id !== action.payload);
    default:
      return state;
  }
};

const Todolistreducer = () => {
  const [todo, dispatch] = useReducer(Todoreducer, []);
  const [input, setinput] = useState("");

  const addto = () => {
    if (input.trim() !== "") {
      dispatch({ type: "add", payload: input });
      setinput("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        placeholder="Enter a new todo"
        onChange={(e) => setinput(e.target.value)}
      />
      <button type="submit" onClick={addto}>
        add
      </button>
      <br />
      {todo.map((items) => (
        <li key={items.id}>
          {items.text}
          {"    "}
          <button
            onClick={() => dispatch({ type: "delete", payload: items.id })}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default Todolistreducer;
