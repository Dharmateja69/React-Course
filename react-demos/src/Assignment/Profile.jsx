import React, { useState } from "react";

const Profile = () => {
  const [profile, setprofile] = useState({
    name: "",
    age: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setprofile((profile) => ({
      ...profile,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>User profile</h1>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter the name"
            value={profile.name}
            onChange={handlechange}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            placeholder="Enter the Age"
            value={profile.age}
            onChange={handlechange}
          />
        </label>
      </div>
      <h2>Profile Information</h2>
      <p>Name:{profile.name}</p>
      <p>Age:{profile.age}</p>
    </div>
  );
};

export default Profile;
