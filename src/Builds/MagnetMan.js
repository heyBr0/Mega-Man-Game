import magnetMan from "../robots/magnetMan.jpg";
import { useState } from "react";

const MagnetMan = ({
  setCurrentTurn,
  setBattleLog,
  currentTurn,
  battleLog,
  hpPlayer1,
  hpPlayer2,
  setHpPlayer1,
  setHpPlayer2,
}) => {
  const [healCount, setHealCount] = useState(1);
  const [hitChance, setHitChance] = useState(70);
  const [magnetRocket, setMagnetRocket] = useState(1);
  let redHitChance = document.getElementById("redHitChance");
  let redHealth = document.getElementById("redHealth");

  function MagnetRocketAttack() {
    if (magnetRocket === 1) {
      setMagnetRocket(0);
      setHpPlayer2(hpPlayer2 - 40);
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog}>
          <span id="magnetManLog">Magnet Man</span> used
          <strong> Magnet Rocket! </strong>
          <span id="damage"> -40</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else {
      setCurrentTurn(currentTurn);
      setBattleLog([
        <li key={battleLog}>No more Magnet Rocket!</li>,
        ...battleLog,
      ]);
      alert("No more Magnet Rocket!");
    }
  }

  function heal() {
    if (healCount === 1) {
      setHealCount(0);
      setHpPlayer1(hpPlayer1 + 10);
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog}>
          <span id="magnetManLog">Magnet Man</span> healed{" "}
          <span id="heal"> +10</span> hp
        </li>,
        ...battleLog,
      ]);
    } else {
      setHpPlayer1(hpPlayer1);
      setCurrentTurn(currentTurn);
      setBattleLog([<li key={battleLog}>No more heals!</li>, ...battleLog]);
      alert("You have no more heals!");
    }
  }

  const attackPlayer1 = () => {
    let random = Math.floor(Math.random() * 100);
    if (random <= hitChance && currentTurn < 9) {
      setHpPlayer2(hpPlayer2 - 30);
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog}>
          <span id="magnetManLog">Magnet Man</span> did
          <span id="damage"> -30</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else if (currentTurn >= 9 && random <= hitChance) {
      setHitChance(60);
      redHitChance.style.color = "red";
      setHpPlayer2(hpPlayer2 - 30);
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog}>
          <span id="magnetManLog">Magnet Man</span>did
          <span id="damage"> -30</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else {
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog} id="missed">
          Magnet man missed the shot!
        </li>,
        ...battleLog,
      ]);
    }
  };

  if (hpPlayer1 <= 70) {
    redHealth.style.color = "red";
  }

  return (
    <div>
      <img src={magnetMan} alt="Magnet Man" />
      <h3>Current stats:</h3>
      <p id="redHealth">Health: {hpPlayer1 - 25}</p>
      <p>Heals: {healCount} </p>
      <p>Magnet Rocket: {magnetRocket}</p>
      <p>
        Hit chance: <span id="redHitChance">{hitChance}%</span>
      </p>
      <div>
        {currentTurn % 2 === 0 && (
          <div>
            <button className="healButton" onClick={heal}>
              Heal
            </button>
            <button className="standardAttack" onClick={attackPlayer1}>
              Attack
            </button>
            <button className="magnetRocket" onClick={MagnetRocketAttack}>
              Magnet Rocket
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default MagnetMan;
