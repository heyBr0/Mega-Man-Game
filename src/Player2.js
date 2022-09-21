import ShadowMan2 from "./Builds/ShadowMan2";
import MagnetMan2 from "./Builds/MagnetMan2";
import SnakeMan2 from "./Builds/SnakeMan2";
import SparkMan2 from "./Builds/SparkMan2";
import { useContext } from "react";
import HPContext from "./Context/HPcontext";
import endGameSound from "./Audio/endgame.wav";

const Player2 = ({
  chosen2,
  setCurrentTurn,
  setBattleLog,
  currentTurn,
  battleLog,
}) => {
  const [hpPlayer1, hpPlayer2, setHpPlayer1, setHpPlayer2] =
    useContext(HPContext);

  function playEndGame() {
    const selectAudio = new Audio(endGameSound);
    selectAudio.volume = 0.3;
    selectAudio.play();
  }

  function pageReset() {
    window.location.reload(false);
  }

  if (chosen2 === "Shadow Man" && hpPlayer2 <= 30) {
    playEndGame();
    setTimeout(() => {
      alert("Player 2 - Shadow man lost!");
      pageReset();
    }, 500);
  }

  if (chosen2 === "Magnet Man" && hpPlayer2 <= 25) {
    playEndGame();
    setTimeout(() => {
      alert("Player 2 - Magnet man lost!");
      pageReset();
    }, 500);
  }

  if (chosen2 === "Snake Man" && hpPlayer2 <= 40) {
    playEndGame();
    setTimeout(() => {
      alert("Player 2 - Snake man lost!");
      pageReset();
    }, 500);
  }

  if (chosen2 === "Spark Man" && hpPlayer2 <= 35) {
    playEndGame();
    setTimeout(() => {
      alert("Player 2 - Spark man lost!");
      pageReset();
    }, 500);
  }

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
