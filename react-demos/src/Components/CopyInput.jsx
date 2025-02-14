import React, { useState } from "react";
import Popupcomponent from "./Popupcomponent";

const CopyInput = () => {
  const [inputvalue, setinputvalue] = useState("");
  const [copied, setcopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputvalue).then(() => {
      setcopied(true);

      setTimeout(() => {
        setcopied(false);
      }, 2000);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputvalue}
        onChange={(e) => setinputvalue(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      <Popupcomponent copied={copied} />
    </div>
  );
};

export default CopyInput;
