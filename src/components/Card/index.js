import React, { useState } from "react";
import "./Card.css";

import Name from "../Name";
import Button from "../Button";
import Coin from "../Coin";
import CoinInstruction from "../CoinInstruction";

function Card({
  bootcamper,
  chooseNewBootcamper,
  flip,
  coinInstructionText,
  coinText,
}) {
  return (
    <div className="card">
      <Name text={bootcamper.firstname} />
      <Button onClick={chooseNewBootcamper} />
      <Coin onClick={flip} coinText={coinText} />
      <CoinInstruction coinInstructionText={coinInstructionText} />
    </div>
  );
}

export default Card;
