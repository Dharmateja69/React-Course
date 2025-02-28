// type UserShape = {
//   name: string;
//   age: number;
//   isStudent: boolean;
// };
//we are defining the type of props here
//instead we can use interface as well
interface UserShape {
  name: string;
  age: number;
  isStudent: boolean;
}

const User = ({ name, age, isStudent }: UserShape) => {
  //this is the basic difference between the two snippets
  // The error in the snippet below is:
  //Parameter 'props' implicitly has an 'any' type.ts(7006)
  //  because we are not defining the type of props.
  return (
    <div>
      <h2>
        {" "}
        {name} is {age} years old.
        {isStudent ? " He is a student." : " He is not a student."}
      </h2>
    </div>
  );
};

export default User;
