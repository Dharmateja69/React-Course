import AdminInfo from "./Assignment/AdminInfo";
import { AdminInfoList, Info } from "./Assignment/Types";
import UserInfo from "./Assignment/UserInfo";
function App() {
  const user: Info = {
    id: 1,
    name: "John",
    email: "jhon@gmail.com",
  };
  const Admin: AdminInfoList = {
    id: 2,
    name: "JohnAdmin",
    email: "jhonAdmin@gmail.com",
    role: "Admin",
    lastlogin: new Date(),
  };
  return (
    <div>
      <AdminInfo Admin={Admin} />
      <UserInfo user={user} />
    </div>
  );
}

export default App;
