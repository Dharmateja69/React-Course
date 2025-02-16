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
// Step-by-Step Execution Flow
// 1️⃣ Initial Render Phase
// The component function FetchDataEffect is called when it first renders.
// The state data is initialized as an empty array (useState([])).
// React begins rendering the JSX.
// At this point, the useEffect has not executed yet.
// 2️⃣ Execution of useEffect
// After the initial render, React executes useEffect because:

// It is scheduled to run after the component renders.
// The dependency array [] (empty) tells React to run the effect only once after the first render.
// 3️⃣ Inside useEffect
// The function getData is declared inside useEffect, but it does not run immediately.
// React schedules getData() to run asynchronously after the render.
// getData() executes:
// Fetch API call starts → Makes an HTTP request to "https://jsonplaceholder.typicode.com/posts".
// Response received → Converts response data to JSON.
// State update (setData(jsonData)) → Updates data with fetched posts.
// 4️⃣ State Update Triggers Re-render
// setData(jsonData) changes the state (data).
// When state changes in React, the component re-renders.
// This means:
// The function FetchDataEffect runs again.
// The updated data array is now filled with posts.
// React updates the DOM with the fetched posts.
