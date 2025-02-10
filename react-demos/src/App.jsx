import React from "react";
import Greetinf from "./Assignment/Greetinf";
import Userstatus from "./Assignment/Userstatus";
import Weather from "./Assignment/Weather";

export default function App() {
  return (
    <div>
      <Weather temp="25" />
      <Userstatus loggedin={true} isadmin={true} />
      <Greetinf timeofDay="a" />
    </div>
  );
}
