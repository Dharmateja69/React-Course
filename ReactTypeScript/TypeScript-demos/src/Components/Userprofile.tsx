import { FC } from "react";

interface User {
  name: string;
  age: number;
}
interface UserProps {
  user: User;
}

const Userprofile: FC<UserProps> = ({ user }) => {
  return (
    <div>
      <section>
        <h1>Name:{user.name}</h1>
        <h3>Age:{user.age}</h3>
      </section>
    </div>
  );
};

export default Userprofile;
