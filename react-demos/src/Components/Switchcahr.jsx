import React, { useState } from "react";

const Switchcahr = () => {
  const [sw, setsw] = useState(false);
  return (
    <div>
      {sw ? <span>Dark</span> : <span>Light</span>}

      <br />
      <input type="text" key={sw ? "dark" : "light"} />
      <button onClick={() => setsw((e) => !e)}>Switch</button>
    </div>
  );
};

export default Switchcahr;
// Let's break down the main pieces of the code in detail:

// ---

// ### **1. Conditional Rendering (`sw ? <span>Dark</span> : <span>Light</span>`)**
// ```jsx
// {sw ? <span>Dark</span> : <span>Light</span>}
// ```
// - This is a **ternary operator** that conditionally renders UI elements.
// - If `sw` is `true`, it renders `<span>Dark</span>`.
// - If `sw` is `false`, it renders `<span>Light</span>`.
// - This dynamically updates the text based on the state value (`sw`).

// ---

// ### **2. Input Element with Dynamic `key` (`key={sw ? "dark" : "light"}`)**
// ```jsx
// <input type="text" key={sw ? "dark" : "light"} />
// ```
// - The `key` attribute is used to uniquely identify elements in React.
// - When `sw` changes (`true` → `false` or vice versa), the key also changes (`"dark"` → `"light"`).
// - React will **recreate the input field** instead of just updating it, which ensures a fresh input field every time the switch happens.

// ---

// ### **3. Button with State Toggle (`onClick={() => setsw((e) => !e)}`)**
// ```jsx
// <button onClick={() => setsw((e) => !e)}>Switch</button>
// ```
// - This is a button that toggles the state `sw` between `true` and `false`.
// - `setsw((e) => !e)`:
//   - `e` represents the current state value (`sw`).
//   - `!e` flips the value (`true` → `false` or `false` → `true`).
// - This ensures that clicking the button **switches between "Dark" and "Light" modes**.

// ---

// ### **Summary of Functionality**
// - Initially, `sw` is `false`, so it displays `"Light"` and an input field with the key `"light"`.
// - Clicking the "Switch" button toggles `sw` to `true`, changing the text to `"Dark"` and recreating the input field with a new key `"dark"`.
// - Clicking again toggles back to `"Light"` and a fresh input field.

// Would you like any additional explanations or improvements? 🚀
