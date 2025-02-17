import React from "react";
import UserProfile from "./Assignment/UserProfile";
import { UserProvider } from "./Assignment/UserProvider";

export default function App() {
  return (
    <div>
      <UserProvider>
        <UserProfile />
      </UserProvider>
    </div>
  );
}

// The App component renders a <div>.
// Inside <div>, UserProvider is wrapped around UserProfile.
// This means UserProfile now has access to UserProvider's context.
