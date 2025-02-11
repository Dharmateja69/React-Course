import React from "react";

const Copy = () => {
  const handleCopy = () => {
    console.log("stop ");
  };

  return (
    <h1>
      <p onCopy={handleCopy}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam
        pariatur quas quasi porro in exercitationem placeat modi qui officia,
        error veritatis ipsa fugit dicta, optio sapiente facere assumenda
        accusantium.
      </p>
    </h1>
  );
};

export default function App() {
  return (
    <div>
      <Copy />
    </div>
  );
}
