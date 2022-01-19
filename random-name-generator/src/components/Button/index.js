import React, { useEffect, useState } from "react";

function Button({ onClick }) {
  const [bootcamperName, setName] = useState("");
  const [bootcamperNum, setBootcamperNum] = useState(0);

  async function changeIsChosen() {
    const response = await fetch(
      `https://socnamegenerator.herokuapp.com/bootcampers/${bootcamperNum}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          isChosen: true,
        }),
      }
    );
  }

  async function getRandomBootcampers() {
    const num = Math.floor(Math.random() * 10 + 1);
    setBootcamperNum(num);
    const response = await fetch(
      `https://socnamegenerator.herokuapp.com/bootcampers/${num}`
    );
    let data = await response.json();
    console.log(data);
    while (data.payload[0].ischosen) {
      const num = Math.floor(Math.random() * 10 + 1);
      const response = await fetch(
        `https://socnamegenerator.herokuapp.com/bootcampers/${num}`
      );
      data = await response.json();
    }

    console.log(data.payload[0].firstname);
    const name = data.payload[0].firstname;
    changeIsChosen();
    setName(name);
  }

  function handleClick() {
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
