import React, { useState } from "react";

import Name from "../Name";
import Button from "../Button";

function Card() {
  const [name, setName] = useState("");

  function showName(newName) {
    setName(newName);
  }

  return (
    <div>
      <Name text={name} />
      <Button onClick={showName} />
    </div>
  );
}

export default Card;
