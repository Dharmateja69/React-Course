import { FC } from "react";

type UserShape = {
  name: string;
  age: number;
  //   isStudent: boolean;
};
//we are defining the type of props here
//instead we can use interface as well

const User: FC<UserShape> = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
    </div>
  );
};

export default User;
//what is Fc?
//FC is a generic type that takes the shape of the props object as a type argument.
//waht is props?
//props are the properties that are passed to a component from a parent component.
//what is the difference between type and interface?
//Type aliases are exactly that - aliases. They are a name for any type.
//Interfaces are more “heavy” in a sense that they create a new name that is used everywhere.
//Type aliases are more constrained in a sense that you can’t extend from them to add more properties (or methods) to a type alias - for that you need an interface.
//Type aliases are more constrained in a sense that you can’t extend from them to add more properties (or methods) to a type alias - for that you need an interface.
//what is the usershape
//UserShape is a type that defines the shape of the props object that is passed to the User component.
//what is the use of curly braces in the User component?
//The curly braces are used to destructure the props object. This allows us to access the name and age properties directly without having to use props.name and props.age.
