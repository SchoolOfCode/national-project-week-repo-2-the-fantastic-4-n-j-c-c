import React, { useState } from "react";
import "./Coin.css";

function Coin({ onClick, coinText }) {
  return (
    <button className="coin" onClick={onClick}>
      {coinText}
    </button>
  );
}

export default Coin;
