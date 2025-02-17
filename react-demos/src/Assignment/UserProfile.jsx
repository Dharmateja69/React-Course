import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
    </div>
  );
};

export default UserProfile;

// Detailed Explanation of UserProfile Component

// This UserProfile component retrieves and displays user data from UserContext using useContext(). Let's break it down step by step for better clarity.

// 1. Importing Dependencies

// import React, { useContext } from "react";
// import { UserContext } from "./UserProvider";
// React → Required for building the component.
// useContext → A React hook that allows accessing context values without prop drilling.
// UserContext → Imported from UserProvider.js, where user data is managed.

// 2. Accessing Context Data
// const { user } = useContext(UserContext);
// useContext(UserContext) fetches the current user state from UserContext.
// Destructuring { user } extracts only the user object from context, making it easier to use.

// 3. Rendering the UI
// return (
//   <div>
//     <h1>User Profile</h1>
//     <p>Name: {user.name}</p>
//   </div>
// );
// Displays a heading "User Profile".
// Shows the user’s name dynamically using {user.name}.

// 4. Exporting the Component
// export default UserProfile;
// Makes UserProfile available for use in other components.
// How It Works with UserProvider
// The UserProvider component manages user data using useState().
// UserContext.Provider shares user with all components inside it.
// UserProfile consumes user using useContext(UserContext) and displays the user's name.
