import React, { useState } from "react";

function Button({ onClick }) {
  function getRandomNumber() {
    return Math.floor(Math.random() * 10 + 1);
  }

  function handleClick(event) {
    event.preventDefault();
    onClick(async () => {
      const num = getRandomNumber();
      console.log(num);
      const fetchedName = await fetch(
        `https://socnamegenerator.herokuapp.com/bootcampers/${num}`
      );
      const data = await fetchedName.json();
      console.log(data.payload[0].firstname);
      onClick(data);
    });
  }

  return <button onClick={handleClick}>Random Name</button>;
}

export default Button;
