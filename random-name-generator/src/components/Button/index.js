import React, { useEffect, useState } from "react";

function Button({ onClick }) {
  const [bootcamperName, setName] = useState("");
  // const [bootcamperNum, setBootcamperNum] = useState(0);

  // async function changeIsChosen() {
  //   await fetch(
  //     `https://socnamegenerator.herokuapp.com/bootcampers/${bootcamperNum}`,
  //     {
  //       method: "PATCH",
  //       body: JSON.stringify({
  //         isChosen: true,
  //       }),
  //     }
  //   );
  // }

  async function getRandomBootcampers() {
    const responsee = await fetch(
      `https://socnamegenerator.herokuapp.com/bootcampers`
    );
    const dataaa = await responsee.json();
    console.log("DATA", dataaa.payload.length);
    const d = dataaa.payload.length;

    const num = Math.floor(Math.random() * d + 1);

    // setBootcamperNum(num);

    const response = await fetch(
      `https://socnamegenerator.herokuapp.com/bootcampers/${num}`
    );

    let data = await response.json();
    console.log(data);
    // while (data.payload[0].ischosen) {
    //   const num = Math.floor(Math.random() * 10 + 1);
    //   const response = await fetch(
    //     `https://socnamegenerator.herokuapp.com/bootcampers/${num}`
    //   );
    //   data = await response.json();
    // }

    console.log(data.payload[0].firstname);
    const name = data.payload[0].firstname;
    console.log("ISCHOSEN  ", data.payload[0].ischosen);

    if (!data.payload[0].ischosen) {
      setName(name);
      await fetch(`https://socnamegenerator.herokuapp.com/bootcampers/${num}`, {
        method: "PATCH",
        body: JSON.stringify({
          ischosen: false,
        }),
      });
    }

    // changeIsChosen();

    // setName(name);
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