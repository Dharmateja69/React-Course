import React from "react";

const ProfileCard = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "lightgray",
        padding: "15px",
        borderRadius: "8px",
        color: "black",
      }}
    >
      {children}
    </div>
  );
};

export default ProfileCard;
