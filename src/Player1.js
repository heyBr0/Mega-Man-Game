import ShadowMan from "./Builds/ShadowMan";
import MagnetMan from "./Builds/MagnetMan";
import SnakeMan from "./Builds/SnakeMan";
import SparkMan from "./Builds/SparkMan";
import { useContext } from "react";
import HPContext from "./Context/HPcontext";

const Player1 = ({
  chosen1,
  setCurrentTurn,
  setBattleLog,
  currentTurn,
  battleLog,
}) => {
  const [hpPlayer1, hpPlayer2, setHpPlayer1, setHpPlayer2] =
    useContext(HPContext);

  function pageReset() {
    window.location.reload(false);
  }



  if (chosen1 === "Shadow Man" && hpPlayer1 <= 30) {
    alert("Shadow man lost!");
    pageReset();
  }

  /* + 3 additional conditions */

  if (chosen1 === "Shadow Man") {
    return (
      <ShadowMan
        setCurrentTurn={setCurrentTurn}
        setBattleLog={setBattleLog}
        currentTurn={currentTurn}
        battleLog={battleLog}
        hpPlayer1={hpPlayer1}
        hpPlayer2={hpPlayer2}
        setHpPlayer1={setHpPlayer1}
        setHpPlayer2={setHpPlayer2}
      />
    );
  } else if (chosen1 === "Magnet Man") {
    return (
      <MagnetMan
        setCurrentTurn={setCurrentTurn}
        setBattleLog={setBattleLog}
        currentTurn={currentTurn}
        battleLog={battleLog}
        hpPlayer1={hpPlayer1}
        hpPlayer2={hpPlayer2}
        setHpPlayer1={setHpPlayer1}
        setHpPlayer2={setHpPlayer2}
      />
    );
  } else if (chosen1 === "Snake Man") {
    return (
      <SnakeMan
        setCurrentTurn={setCurrentTurn}
        setBattleLog={setBattleLog}
        currentTurn={currentTurn}
        battleLog={battleLog}
        hpPlayer1={hpPlayer1}
        hpPlayer2={hpPlayer2}
        setHpPlayer1={setHpPlayer1}
        setHpPlayer2={setHpPlayer2}
      />
    );
  } else if (chosen1 === "Spark Man") {
    return (
      <SparkMan
        setCurrentTurn={setCurrentTurn}
        setBattleLog={setBattleLog}
        currentTurn={currentTurn}
        battleLog={battleLog}
        hpPlayer1={hpPlayer1}
        hpPlayer2={hpPlayer2}
        setHpPlayer1={setHpPlayer1}
        setHpPlayer2={setHpPlayer2}
      />
    );
  }
};

export default Player1;
