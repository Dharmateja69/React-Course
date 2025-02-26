import React, { useState } from "react";
import products from "../src/Projects/p-10/db/data";
import Navi from "./Projects/p-10/Navigation/Navi";
import Product from "./Projects/p-10/Products/Product";
import Recomended from "./Projects/p-10/Recommend/Recomended";
import Sidebar from "./Projects/p-10/Sidebar/Sidebar";

export default function App() {
  const [selctedCategory, setSelcetdCategory] = useState(null);
  //-input-filter....
  const [query, setquery] = useState("");
  const handleInputChange = (e) => {
    setquery(e.target.value);
  };
  const filteredItem = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );
  //----radio------
  const handleChange = (e) => {
    setSelcetdCategory(e.target.value);
  };
  //---Buttons filter-------------
  const handleclick = () => {
    setSelcetdCategory(e.target.value);
  };
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar />
      <Navi />
      <Recomended />
      <Product />
    </>
  );
}
