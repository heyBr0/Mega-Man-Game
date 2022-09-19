import { useState } from "react";
import TheChoice from "./TheChoice";

function RobotMaster({
  fightBox,
  setFightBox,
  ROBOTS,
  setSecondChoice,
  setFirstChoice,
}) {
  const [display, setDisplay] = useState("");
  const [choose, setChoose] = useState(true);

  const chooseRobot = (e) => {
    setDisplay("Your character is " + e.target.name);
    setChoose((choose) => !choose);
    setFightBox([...fightBox, e.target.name]);
    setFirstChoice(e.target.name);
  };

  const chooseEnemy = (e) => {
    setDisplay([...display, " / Your enemy is " + e.target.name]);
    setChoose((choose) => !choose);
    setFightBox([...fightBox, e.target.name]);
    setSecondChoice(e.target.name);
  };

  function pageReset() {
    window.location.reload(false);
  }

  return (
    <div className="RobotMaster">
      <div>
        <TheChoice
          choose={choose}
          chooseRobot={chooseRobot}
          ROBOTS={ROBOTS}
          chooseEnemy={chooseEnemy}
        />
      </div>

      <h3>Display:</h3>
      <div id="display">{display}</div>
      <button onClick={pageReset} id="reset">
        Reset
      </button>
      <aside id="heyBro">
        Game made by
        <a href="https://github.com/heyBr0" target="_blank" rel="noreferrer">
          heyBro
        </a>
      </aside>
    </div>
  );
}

export default RobotMaster;
