import snakeMan from "../robots/snakeMan.jpg";
import { useState } from "react";

const SnakeMan2 = ({
  setCurrentTurn,
  setBattleLog,
  currentTurn,
  battleLog,
  hpPlayer1,
  hpPlayer2,
  setHpPlayer1,
  setHpPlayer2,
}) => {
  const [healCount, setHealCount] = useState(2);
  const [hitChance, setHitChance] = useState(90);
  const [snakeCanon, setSnakeCanon] = useState(1);
  let redHitChance2 = document.getElementById("redHitChance2");
  let redHealth2 = document.getElementById("redHealth2");

  function snakeCanonAttack() {
    if (snakeCanon === 1) {
      setSnakeCanon(0);
      setHpPlayer1(hpPlayer1 - 35);
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog}>
      <span id="snakeManLog">Snake Man</span> used
          <strong> Snake Canon! </strong>
          <span id="damage"> -40</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else {
      setCurrentTurn(currentTurn);
      setBattleLog([
        <li key={battleLog}>No more Snake Canon!</li>,
        ...battleLog,
      ]);
      alert("No more Snake Canon!");
    }
  }

  function heal() {
    if (healCount > 0) {
      setHealCount(healCount => healCount - 1);
      setHpPlayer2(hpPlayer2 + 20);
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog}>
        <span id="snakeManLog">Snake Man</span> healed
        <span id="heal"> +20</span> hp
      </li>,
      ...battleLog,
      ]);
    } else {
      setHpPlayer2(hpPlayer2);
      setCurrentTurn(currentTurn);
      setBattleLog([<li key={battleLog}>No more heals!</li>, ...battleLog]);
      alert("You have no more heals!");
    }
  }

  const attackPlayer2 = () => {
    let random = Math.floor(Math.random() * 100);
    if (random <= hitChance && currentTurn < 9) {
      setHpPlayer1(hpPlayer1 - 15);
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog}>
          <span id="snakeManLog">Snake Man</span> did
          <span id="damage"> -15</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else if (currentTurn >= 9 && random <= hitChance) {
      setHitChance(70);
      redHitChance2.style.color = "red";
      setHpPlayer1(hpPlayer1 - 15);
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog}>
          <span id="snakeManLog">Snake Man</span>did
          <span id="damage"> -15</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else {
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog} id="missed">
          Snake man missed the shot!
        </li>,
        ...battleLog,
      ]);
    }
  };

  if (hpPlayer2 <= 70) {
    redHealth2.style.color = "red";
  }
  return (
    <div>
      <img src={snakeMan} alt="Snake Man" />
      <h3>Current stats:</h3>
      <p id="redHealth2">Health: {hpPlayer2 - 40}</p>
      <p>Heals: {healCount} </p>
      <p>Snake Canon: {snakeCanon}</p>
      <p>
        Hit chance: <span id="redHitChance2">{hitChance}%</span>
      </p>
      <div>
        {currentTurn % 2 === 1 && (
          <div>
            <button className="healButton" onClick={heal}>
              Heal
            </button>
            <button className="standardAttack" onClick={attackPlayer2}>
              Attack
            </button>
            <button className="snakeCanon" onClick={snakeCanonAttack}>
            Snake Canon
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default SnakeMan2;
