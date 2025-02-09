import React from "react";
import Cards from "./Components/Cards";

export default function App() {
  return (
    //As we are passing the body of the card unless the property...we will accept this in the children keyword in child component.
    <div>
      <Cards>
        <h1>this is the card heading!!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          deserunt delectus officiis, ex veritatis, nam molestias itaque
          accusamus sapiente aspernatur similique libero iusto! Dicta dolor,
          fugit aperiam illo accusantium asperiores.
        </p>
      </Cards>
      <Cards>
        <h1>this is the card heading1!!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          deserunt delectus officiis, ex veritatis, nam molestias itaque
          accusamus sapiente aspernatur similique libero iusto! Dicta dolor,
          fugit aperiam illo accusantium asperiores.
        </p>
      </Cards>
      <Cards>
        <h1>this is the card heading2!!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          deserunt delectus officiis, ex veritatis, nam molestias itaque
          accusamus sapiente aspernatur similique libero iusto! Dicta dolor,
          fugit aperiam illo accusantium asperiores.
        </p>
      </Cards>
    </div>
  );
}
