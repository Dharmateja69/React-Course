import React from "react";
import Iconcompentnt from "./Assignment/Iconcompentnt";
import ProfileCard from "./Assignment/ProfileCard";
import StyleCard from "./Assignment/StyleCard";

export default function App() {
  return (
    <div>
      <StyleCard>
        <h1>Hi this is the StyleCard unit!!</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus odio similique pariatur repudiandae fuga dolorum
          accusantium quod harum quaerat quos, placeat ex cum dolore quas?
          Reprehenderit sunt nobis reiciendis ex?
        </p>
      </StyleCard>
      <ProfileCard>
        <h1>Hi this is the StyleCard unit!!</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus odio similique pariatur repudiandae fuga dolorum
          accusantium quod harum quaerat quos, placeat ex cum dolore quas?
          Reprehenderit sunt nobis reiciendis ex?
        </p>
      </ProfileCard>
      <Iconcompentnt />
    </div>
  );
}
