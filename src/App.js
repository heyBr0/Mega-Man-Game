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
      heals: 1,
      hitChance : 80
    },
    {
      name: "Snake Man",
      hp: 110,
      attack: "Snake canon",
      heals: 2,
      hitChance : 90
    },
    {
      name: "Magnet Man",
      hp: 125,
      attack: "Magnet rocket",
      heals: 1,
      hitChance : 70
    },
    {
      name: "Spark Man",
      hp: 115,
      attack: "Spark shock",
      heals: 1,
      hitChance : 85
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
