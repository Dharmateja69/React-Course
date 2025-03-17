import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import MyProvider from "./MyContext.jsx";
createRoot(document.getElementById("root")).render(
  <MyProvider>
    <App />
  </MyProvider>
);
