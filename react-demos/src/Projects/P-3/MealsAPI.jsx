import axios from "axios";
import React, { useEffect, useState } from "react";
import "../P-3/style.css";
const MealsAPI = () => {
  const [items, setitem] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setitem(res.data.meals))
      .catch((error) => console.log(error));
  }, []);

  const itemlist = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card">
        <img src={strMealThumb} alt={strMeal} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="items-container">{itemlist}</div>;
};

export default MealsAPI;
