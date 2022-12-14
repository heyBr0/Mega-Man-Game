import { useContext, useState } from "react";
import Player1 from "./Player1";
import Player2 from "./Player2";
import ChoiceContext from "./Context/ChoiceContext";
import ChoiceContext2 from "./Context/ChoiceContext2";
import HPContextProvider from "./Context/HPContextProvider";
import resetSound from "./Audio/reset.mp3";

function Fight({ fightBox, ROBOTS }) {
  const [battleLog, setBattleLog] = useState([]);

  const [robot0, setRobot0] = useState(fightBox[0]);
  const [robot1, setRobot1] = useState(fightBox[1]);
  const [currentTurn, setCurrentTurn] = useState(0);

  for (let i = 0; i < ROBOTS.length; i++) {
    if (robot0 === ROBOTS[i].name) {
      setRobot0(ROBOTS[i]);
    }
  }

  for (let i = 0; i < ROBOTS.length; i++) {
    if (robot1 === ROBOTS[i].name) {
      setRobot1(ROBOTS[i]);
    }
  }

  function playReset() {
    const selectAudio = new Audio(resetSound);
    selectAudio.volume = 0.3;
    selectAudio.play();
  }

  const chosen1 = useContext(ChoiceContext);
  const chosen2 = useContext(ChoiceContext2);

  function pageReset() {
    playReset();
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  }

  return (
    <div>
      <h1 className="headerFight">
        [{fightBox[0]} <span id="vs">vs</span> {fightBox[1]}]
      </h1>
      {
        <h4>
          Turns made: {currentTurn}
          <p id="infoTurn">
            (hit chance could randomly decrease after ~10th turn)
          </p>
        </h4>
      }

      <HPContextProvider>
        <div id="info">
          <div id="infoLeft">
            <section>
              <p>Player 1:</p>
              <Player1
                chosen1={chosen1}
                setCurrentTurn={setCurrentTurn}
                setBattleLog={setBattleLog}
                currentTurn={currentTurn}
                battleLog={battleLog}
              />
            </section>
          </div>
          <div id="displayInfo">
            <h4> Battle Log: </h4>

            {battleLog}
            <p className="battleBegin">Battle begin!</p>
          </div>
          <div id="infoRight">
            <section>
              <p>Player 2:</p>
              <Player2
                chosen2={chosen2}
                setCurrentTurn={setCurrentTurn}
                setBattleLog={setBattleLog}
                currentTurn={currentTurn}
                battleLog={battleLog}
              />
            </section>
          </div>
        </div>
      </HPContextProvider>
      <button onClick={() => pageReset()} id="reset">
        Restart Game
      </button>
    </div>
  );
}

export default Fight;
