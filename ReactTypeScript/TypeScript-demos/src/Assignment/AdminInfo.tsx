import { FC } from "react";
import { AdminInfoList } from "./Types";
type Admndata = {
  Admin: AdminInfoList;
};
const AdminInfo: FC<Admndata> = ({ Admin }) => {
  return (
    <div>
      <h1>Admin Info</h1>
      <p>ID: {Admin.id}</p>
      <p>Name: {Admin.name}</p>
      <p>Email: {Admin.email}</p>
      <p>Role: {Admin.role}</p>
      <p>Last Login: {Admin.lastlogin.toString()}</p>
    </div>
  );
};

export default AdminInfo;
