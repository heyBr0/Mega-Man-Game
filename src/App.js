import { useState } from "react";
import "./App.css";
import RobotMaster from "./RobotMaster";
import Fight from "./Fight";

function App() {
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
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Fight fightBox={fightBox} ROBOTS={ROBOTS} />
      </div>
    );
  }
}

export default App;
