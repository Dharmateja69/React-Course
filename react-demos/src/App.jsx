import React from "react";
import { useFetch } from "./Components/CoustomedHook";

export default function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      {data &&
        data.map((item) => (
          <li key={item.id}>Body:{item.body}</li> // Removed semicolon & used a unique key
        ))}
    </div>
  );
}
