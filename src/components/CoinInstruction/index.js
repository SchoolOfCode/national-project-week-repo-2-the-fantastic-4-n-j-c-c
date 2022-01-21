import React, { useState } from "react";
import "./CoinInstruction.css";

function CoinInstruction({ coinInstructionText }) {
  return <h3 className="coinInstruction">{coinInstructionText}</h3>;
}

export default CoinInstruction;
