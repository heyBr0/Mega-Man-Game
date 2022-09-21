import { useState } from "react";
import TheChoice from "./TheChoice";
import selectSound from "./Audio/select.mp3";
import resetSound from "./Audio/reset.mp3";

function RobotMaster({
  fightBox,
  setFightBox,
  ROBOTS,
  setSecondChoice,
  setFirstChoice,
}) {
  const [display, setDisplay] = useState("");
  const [choose, setChoose] = useState(true);

  function playSelect() {
    const selectAudio = new Audio(selectSound);
    selectAudio.volume = 0.3;
    selectAudio.play();
  }
  function playReset() {
    const selectAudio = new Audio(resetSound);
    selectAudio.volume = 0.3;
    selectAudio.play();
  }

  const chooseRobot = (e) => {
    setDisplay("Your character is " + e.target.name);
    setChoose((choose) => !choose);
    setFightBox([...fightBox, e.target.name]);
    setFirstChoice(e.target.name);
    playSelect();
  };

  const chooseEnemy = (e) => {
    setDisplay([...display, " / Your enemy is " + e.target.name]);
    setChoose((choose) => !choose);
    setFightBox([...fightBox, e.target.name]);
    setSecondChoice(e.target.name);
    playSelect();
  };

  function pageReset() {
    playReset();
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
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
