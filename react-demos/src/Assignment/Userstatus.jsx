import React from "react";

const Userstatus = ({ loggedin, isadmin }) => {
  if (loggedin && isadmin) {
    return <h1>Welcome Admin!!</h1>;
  } else {
    return <h1>Welcome User</h1>;
  }

  return <div></div>;
};

export default Userstatus;
