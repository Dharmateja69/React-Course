import React, { useState } from "react";

const ShoppingList = () => {
  const [name, setname] = useState("");
  const [items, setItems] = useState([]);
  const [quantity, setquantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;

    const newItem = {
      name,
      quantity: parseInt(quantity),
    };
    setItems((previtems) => [...previtems, newItem]);
    setname("");
    setquantity("");
  };

  return (
    <div>
      <h1>Shoping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setquantity(e.target.value)}
        />

        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}- Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
