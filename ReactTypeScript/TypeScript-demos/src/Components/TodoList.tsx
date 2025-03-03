import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };
  const remove = (todo: string) => {
    setTodos(todos.filter((todos) => todos !== todo));
  };

  return (
    <section>
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={Math.random()}>
            <section
              style={{
                display: "flex",
                backgroundColor: "lightblue",
                padding: "10px",
                margin: "10px",
                width: "25%",
              }}
            >
              {todo}&nbsp;&nbsp;&nbsp;
              <button onClick={() => remove(todo)}>Delete</button>
            </section>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
