import ShadowMan from "./Builds/ShadowMan";
import MagnetMan from "./Builds/MagnetMan";
import SnakeMan from "./Builds/SnakeMan";
import SparkMan from "./Builds/SparkMan";
import { useContext } from "react";
import HPContext from "./Context/HPcontext";
import endGameSound from "./Audio/endgame.wav";

const Player1 = ({
  chosen1,
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

  if (chosen1 === "Shadow Man" && hpPlayer1 <= 30) {
    playEndGame();
    setTimeout(() => {
      alert("Player 1 - Shadow man lost!");
      pageReset();
    }, 500);
  }

  if (chosen1 === "Magnet Man" && hpPlayer1 <= 25) {
    playEndGame();
    setTimeout(() => {
      alert("Player 1 - Magnet man lost!");
      pageReset();
    }, 500);
  }

  if (chosen1 === "Snake Man" && hpPlayer1 <= 40) {
    playEndGame();
    setTimeout(() => {
      alert("Player 1 - Snake man lost!");
      pageReset();
    }, 500);
  }

  if (chosen1 === "Spark Man" && hpPlayer1 <= 35) {
    playEndGame();
    setTimeout(() => {
      alert("Player 1 - Spark man lost!");
      pageReset();
    }, 500);
  }

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
