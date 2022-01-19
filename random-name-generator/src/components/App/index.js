import "./App.css";
import { useState } from "react";

import Card from "../Card/index.js";

const nameList = [
  {
    id: 1,
    firstname: "Cigdem",
    lastname: "Ozturk",
    ischosen: true,
  },
  {
    id: 2,
    firstname: "Jenny",
    lastname: "Lewis-Gandy",
    ischosen: true,
  },
  {
    id: 3,
    firstname: "Novel",
    lastname: "Alam",
    ischosen: true,
  },
  {
    id: 4,
    firstname: "Chun Wai",
    lastname: "Lo",
    ischosen: true,
  },
  {
    id: 5,
    firstname: "Mark",
    lastname: "Young",
    ischosen: true,
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
  const [currentIndex, setCurrentIndex] = useState(0);

  function getNewBootcamper() {
    const unchosenBootcampers = bootcampers.filter((bootcamper) => {
      return bootcamper.ischosen === false;
    });
    const randNum = Math.floor(Math.random() * unchosenBootcampers.length);

    const idOfUnchosenBootcamper = unchosenBootcampers[randNum].id;
    const chosen = bootcampers.findIndex(
      (b) => b.id === idOfUnchosenBootcamper
    );
    setCurrentIndex(chosen);
  }

  return (
    <div className="App">
      <Card
        bootcamper={bootcampers[currentIndex]}
        chooseNewBootcamper={getNewBootcamper}
      />
    </div>
  );
}

export default App;
