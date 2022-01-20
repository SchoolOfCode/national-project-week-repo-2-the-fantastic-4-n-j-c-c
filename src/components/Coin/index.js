import React, { useState } from "react";
import "./Coin.css";

function Coin({ onClick, coinText }) {
  return (
    <div>
      <button className="coin" onClick={onClick}>
        {coinText}
      </button>
    </div>
  );
}

export default Coin;
