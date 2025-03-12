import { useEffect, useState } from "react";

type Details = {
  postId: string;
  id: number;
  name: string;
  email: string;
  body: string;
};

const Fetchdata = () => {
  const [data, setData] = useState<Details[]>([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const result: Details[] = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div>
      <h1>Details</h1>
      <ul>
        {data.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.name}</strong> ({comment.email})
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fetchdata;
