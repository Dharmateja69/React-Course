import { FC } from "react";
import { Info } from "./Types";
type Userdata = {
  user: Info;
};

const UserInfo: FC<Userdata> = ({ user }) => {
  return (
    <div>
      <h1>User Info</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserInfo;
