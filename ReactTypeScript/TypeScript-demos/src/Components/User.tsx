// type UserShape = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };
//we are defining the type of props here
//instead we can use interface as well
interface UserShape {
  children: React.ReactNode;
}

const User = ({ children }: UserShape) => {
  //this is the basic difference between the two snippets
  // The error in the snippet below is:
  //Parameter 'props' implicitly has an 'any' type.ts(7006)
  //  because we are not defining the type of props.
  return (
    <div>
      <h2>{children}</h2>
    </div>
  );
};

export default User;
