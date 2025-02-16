import React, { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [data, setdata] = useState([]);
  //main point if we are using effect then of course we have to use state.
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setdata(data);
    }
    getData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <h5>{post.id}</h5>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataEffect;
