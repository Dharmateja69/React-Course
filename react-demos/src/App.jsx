import React from "react";
const num = [1, 2, 3, 4, 5];

export default function App() {
  const userInfo = [
    {
      name: "Alice",
      age: 25,
      year: 1999,
      salary: 50000,
    },
    {
      name: "Bob",
      age: 30,
      year: 1994,
      salary: 60000,
    },
    {
      name: "Charlie",
      age: 28,
      year: 1996,
      salary: 55000,
    },
  ];

  return (
    <div>
      {num.map((number) => (
        // <ul>//App.jsx:6 Warning: Each child in a list should have a unique "key" prop.
        <ul key={number}>
          <li>{number}</li>
        </ul>
      ))}

      {userInfo.map(
        (
          items //here we will use only ( ) after the call back function use {}
        ) => (
          <ul key={Math.random()}>
            {/* //here the key will be its own value only. */}
            <li> name:{items.name}</li>
            <li>age:{items.age}</li>
            <li>year:{items.year}</li>
            <li>salary:{items.salary}</li>
          </ul>
        )
      )}
    </div>
  );
}
//1:02:56
