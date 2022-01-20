import "./App.css";
import { useState, useEffect } from "react";

import Card from "../Card/index.js";

const nameList = [
  {
    id: 1,
    firstname: "Cigdem",
    lastname: "Ozturk",
    ischosen: false,
  },
  {
    id: 2,
    firstname: "Jenny",
    lastname: "Lewis-Gandy",
    ischosen: false,
  },
  {
    id: 3,
    firstname: "Novel",
    lastname: "Alam",
    ischosen: false,
  },
  {
    id: 4,
    firstname: "Chun Wai",
    lastname: "Lo",
    ischosen: false,
  },
  {
    id: 5,
    firstname: "Mark",
    lastname: "Young",
    ischosen: false,
  },
  {
    id: 6,
    firstname: "Juan",
    lastname: "Castel",
    ischosen: false,
  },
  {
    id: 7,
    firstname: "Inga",
    lastname: "Safranova",
    ischosen: false,
  },
  {
    id: 8,
    firstname: "Mihai",
    lastname: "Butoi",
    ischosen: false,
  },
  {
    id: 9,
    firstname: "Will",
    lastname: "Calderbank",
    ischosen: false,
  },
  {
    id: 10,
    firstname: "Kieran",
    lastname: "Megahey",
    ischosen: false,
  },
];

function App() {
  const [bootcampers, setBootcampers] = useState(nameList);
  const [currentIndex, setCurrentIndex] = useState(4);

  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch(`https://socnamegenerator.herokuapp.com/bootcampers`)
  //     const json = await response.json();

  //     const {payload} = json;
  //     setBootcampers(payload)
  //     const randNum = Math.floor(Math.random() * (payload.length - 1 ));
  //     setCurrentIndex(randNum)
  //   }
  //   getData();
  // }, [])

  function getNewBootcamper() {

  //change the ischosen from false to true if selected
    //unchosenBootcampers array
    //useState (setBootcampers)
      //spread the original bootcampers array (THIS IS CAUSING AN INFINITE LOOP)
        //This needs to be wrapped in a useEffect
        //select only the bootcamper with the id (idOfUnchosenBootcamper)
        //select the ischosen key within that bootcamper(object)
        //update the ischosen key to be true.
console.log("original list", bootcampers);
      const bootcampersUpdated = bootcampers.map((bootcamper, i) => {
        if (i===currentIndex) {
          return { ...bootcamper, ischosen:true }
        } 
        return bootcamper;
      })

    const unchosenBootcampers = bootcampersUpdated.filter((bootcamper) => {
      return bootcamper.ischosen === false;
    });
    const randNum = Math.floor(Math.random() * unchosenBootcampers.length);

    const idOfUnchosenBootcamper = unchosenBootcampers[randNum].id;
    const chosen = bootcampers.findIndex(
      (b) => b.id === idOfUnchosenBootcamper
    );
    setCurrentIndex(chosen);
    setBootcampers(bootcampersUpdated);
  console.log("updated list", bootcampers)
  }

  return (
    <div className="App">
      {/* {bootcampers.length > 0 && currentIndex >= 0 &&  */}
      <div className="title">
        <h1>School of Code Name Generator</h1>
      </div>
      <Card
        bootcamper={bootcampers[currentIndex]}
        chooseNewBootcamper={getNewBootcamper}
      />
      {/* } */}
    </div>
  );
}

export default App;















