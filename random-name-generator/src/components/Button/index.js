import React, { useEffect, useState } from "react";

function Button({ onClick }) {
  const [bootcamperName, setName] = useState("");

  async function getRandomBootcampers() {
    const num = Math.floor(Math.random() * 10 + 1);
    const response = await fetch(
      `https://socnamegenerator.herokuapp.com/bootcampers/${num}`
    );
    const data = await response.json();
    console.log(data);
    console.log(data.payload[0].firstname);
    const name = data.payload[0].firstname;
    setName(name);
  }

  function handleClick(event) {
    
    onClick(bootcamperName);
  }

  useEffect(
    function () {
      getRandomBootcampers();
    },
    [onClick]
  );

  return <button onClick={handleClick}>Random Name</button>;
}

export default Button;
