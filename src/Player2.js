import ShadowMan2 from "./Builds/ShadowMan2";
import MagnetMan2 from "./Builds/MagnetMan2";
import SnakeMan2 from "./Builds/SnakeMan2";
import SparkMan2 from "./Builds/SparkMan2";
import { useContext } from "react";
import HPContext from "./Context/HPcontext";

const Player2 = ({
  chosen2,
  setCurrentTurn,
  setBattleLog,
  currentTurn,
  battleLog,
}) => {
  const [hpPlayer1, hpPlayer2, setHpPlayer1, setHpPlayer2] =
    useContext(HPContext);

  if (chosen2 === "Shadow Man") {
    return (
      <ShadowMan2
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
  } else if (chosen2 === "Magnet Man") {
    return (
      <MagnetMan2
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
  } else if (chosen2 === "Snake Man") {
    return (
      <SnakeMan2
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
  } else if (chosen2 === "Spark Man") {
    return (
      <SparkMan2
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

export default Player2;
