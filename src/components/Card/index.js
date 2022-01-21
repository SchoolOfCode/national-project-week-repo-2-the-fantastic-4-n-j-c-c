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
      <div className="generatorAndCoin">
        <Name className="firstname" text={bootcamper.firstname} />
        <Coin onClick={flip} coinText={coinText} />
      </div>
      <div className="buttonAndResult">
        <Button onClick={chooseNewBootcamper} />
        <CoinInstruction coinInstructionText={coinInstructionText} />
      </div>
    
    </div>
  );
}

export default Card;
