import { useState } from "react";
import "./Styles/App.css";
import RobotMaster from "./RobotMaster";
import Fight from "./Fight";
import ChoiceContext from "./Context/ChoiceContext";
import ChoiceContext2 from "./Context/ChoiceContext2";

function App() {
  const [firstChoice, setFirstChoice] = useState("");
  const [secondChoice, setSecondChoice] = useState("");

  const ROBOTS = [
    {
      name: "Shadow Man",
      hp: 120,
      attack: "Shadow blade",
    },
    {
      name: "Snake Man",
      hp: 100,
      attack: "Snakes",
    },
    {
      name: "Magnet Man",
      hp: 130,
      attack: "Magnets",
    },
    {
      name: "Spark Man",
      hp: 110,
      attack: "Spark shock",
    },
  ];

  const [fightBox, setFightBox] = useState([]);

  if (fightBox.length < 2) {
    return (
      <div className="App">
        <RobotMaster
          fightBox={fightBox}
          setFightBox={setFightBox}
          ROBOTS={ROBOTS}
          firstChoice={firstChoice}
          setFirstChoice={setFirstChoice}
          secondChoice={secondChoice}
          setSecondChoice={setSecondChoice}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <ChoiceContext.Provider value={firstChoice}>
          <ChoiceContext2.Provider value={secondChoice}>
            <Fight fightBox={fightBox} ROBOTS={ROBOTS} />
          </ChoiceContext2.Provider>
        </ChoiceContext.Provider>
      </div>
    );
  }
}

export default App;
