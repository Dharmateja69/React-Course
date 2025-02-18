import React, { useContext, useState } from "react";
import { ColorContext } from "./ColorProvider";
import { UserContext } from "./UserProvider";

const Userdata = () => {
  const { user, updateUser } = useContext(UserContext);
  const { color } = useContext(ColorContext);
  const [newname, setname] = useState("");
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
      <button type="submit" onClick={() => updateUser(newname)}>
        update
      </button>
    </div>
  );
};

export default Userdata;
