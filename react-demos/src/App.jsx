import React from "react";

const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>InValid Password</h1>;

const Password = ({ isvalid }) => {
  return isvalid ? <ValidPassword /> : <InvalidPassword />;
};
export default function App() {
  return (
    <div>
      <Password isvalid={true} />
    </div>
  );
}
