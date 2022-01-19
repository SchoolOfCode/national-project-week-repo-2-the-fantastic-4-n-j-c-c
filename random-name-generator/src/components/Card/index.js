import React, { useState } from "react";

import Name from "../Name";
import Button from "../Button";

function Card({ bootcamper, chooseNewBootcamper }) {
  return (
    <div className="card">
      <Name text={bootcamper.firstname} />
      <Button onClick={chooseNewBootcamper} />
    </div>
  );
}

export default Card;
