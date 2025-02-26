import React, { useState } from "react";
import "../p-7/index.css";
const Testamonials = () => {
  const [currentindex, setcurrentindex] = useState(0);

  const data = [
    {
      quote: "you look amazing!!..",
      Author: "Gosh",
    },
    {
      quote: "you so     cute!!..",
      Author: "mandel",
    },
    {
      quote: "you r my priority!!..",
      Author: "Nack",
    },
  ];
  const handlePrev = () => {
    setcurrentindex((currentindex + data.length - 1) % data.length);
  };
  const handlenext = () => {
    setcurrentindex((currentindex + 1) % data.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">{data[currentindex].quote}</div>
      <div className="testimonials-author">{data[currentindex].Author}</div>
      <div className="testimonials-nav">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handlenext}>Next</button>
      </div>
    </div>
  );
};

export default Testamonials;
