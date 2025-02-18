import React, { useContext, useState } from "react";
import { ColorContext } from "./ColorProvider";
import { UserContext } from "./UserProvider";

const Userdata = () => {
  const { user, updateUser } = useContext(UserContext);
  const { color, update } = useContext(ColorContext);
  const [newname, setname] = useState("");
  const [newcolor, setnewcolor] = useState("");
  return (
    <div>
      <h1>User Data</h1>
      <p style={{ color: color }}>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <input
        type="text"
        placeholder="enter the updating name"
        value={newname}
        onChange={(e) => setname(e.target.value)}
      />
      <button type="submit" onClick={() => updateUser(newname)}>
        update
      </button>
      <input
        type="color"
        value={newcolor}
        onChange={(e) => setnewcolor(e.target.value)}
      />
      <button type="submit" onClick={() => update(newcolor)}>
        Click to change the colour
      </button>
    </div>
  );
};

export default Userdata;
