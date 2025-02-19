import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);

  return [data]; // it returns the data
};
