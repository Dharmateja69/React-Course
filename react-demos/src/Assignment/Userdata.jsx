import React, { useContext, useState } from "react";
import { ColorContext } from "./ColorProvider";
import { UserContext } from "./UserProvider";

const Userdata = () => {
  const { user, updateUser } = useContext(UserContext);
  const { color, update } = useContext(ColorContext);
  const [newname, setname] = useState("");
  const [newage, setnewage] = useState("");
  const [newcolor, setnewcolor] = useState("");
  return (
    <div>
      <h1>User Data</h1>
      <p style={{ color: color }}>Name:{user.name}</p>
      <p style={{ color: color }}>Age:{user.age}</p>
      <input
        type="text"
        placeholder="enter the updating name"
        value={newname}
        onChange={(e) => setname(e.target.value)}
      />
      <br></br>
      <input
        type="number"
        placeholder="enter the age"
        value={newage}
        onChange={(e) => setnewage(e.target.value)}
      />{" "}
      <br></br>
      <button type="submit" onClick={() => updateUser(newname, newage)}>
        update
      </button>{" "}
      <br></br>
      <input
        type="color"
        value={newcolor}
        onChange={(e) => setnewcolor(e.target.value)}
      />{" "}
      <br></br>
      <button type="submit" onClick={() => update(newcolor)}>
        Click to change the colour
      </button>
    </div>
  );
};

export default Userdata;
