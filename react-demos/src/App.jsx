import React from "react";
import { ColorProvider } from "./Assignment/ColorProvider"; // Fixed import
import UserProfile from "./Assignment/UserProfile";
import { UserProvider } from "./Assignment/UserProvider";
import Userdata from "./Assignment/Userdata";

export default function App() {
  return (
    <div>
      <UserProvider>
        <ColorProvider>
          <UserProfile />
          <Userdata />
        </ColorProvider>
      </UserProvider>
    </div>
  );
}

// The App component renders a <div>.
// Inside <div>, UserProvider is wrapped around UserProfile.
// This means UserProfile now has access to UserProvider's context.
