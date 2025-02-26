import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../p-6/index.css";
const SearchIcon = () => {
  const [showinput, setshowinput] = useState(false);
  const [bgcolor, setbgcolor] = useState("white");

  const handlick = (e) => {
    setbgcolor("#1a1a1a");
    if (e.target.className === "conatainer") {
      setshowinput(false);
      setbgcolor("white");
    }
  };

  return (
    <section
      className="conatainer"
      style={{ backgroundColor: bgcolor }}
      onClick={handlick}
    >
      {showinput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch onClick={() => setshowinput(true)} />
      )}
    </section>
  );
};

export default SearchIcon;
