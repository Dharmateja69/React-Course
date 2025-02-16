import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      const data = await response.json();
      if (data && data.length) {
        setData(data);
      }
    }
    getData();
  }, []); //this empty {},[]) mean this method will run for one time.

  return (
    <div>
      <ul>
        {data.map((todo) => (
          <section key={todo.id}>
            <li>{todo.id}</li>

            <li>{todo.title}</li>
          </section>
        ))}
      </ul>
    </div>
  );
};

export default UseEffect;
