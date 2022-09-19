import sparkMan from "../robots/sparkMan.jpg";
import { useState } from "react";

const SparkMan2 = ({
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
  const [hitChance, setHitChance] = useState(85);
  const [sparkShock, setSparkShock] = useState(1);
  let redHitChance2 = document.getElementById("redHitChance2");
  let redHealth2 = document.getElementById("redHealth2");

  function sparkShockAttack() {
    if (sparkShock === 1) {
      setSparkShock(0);
      setHpPlayer1(hpPlayer1 - 30);
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog}>
          <span id="sparkManLog">Spark Man</span> used
          <strong> Spark Shock! </strong>
          <span id="damage"> -30</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else {
      setCurrentTurn(currentTurn);
      setBattleLog([
        <li key={battleLog}>No more Spark Shock!</li>,
        ...battleLog,
      ]);
      alert("No more Spark Shock!");
    }
  }

  function heal() {
    if (healCount === 1) {
      setHealCount(0);
      setHpPlayer2(hpPlayer2 + 15);
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog}>
          <span id="sparkManLog">Spark Man</span> healed
          <span id="heal"> +15</span> hp
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
      setHpPlayer1(hpPlayer1 - 25);
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog}>
          <span id="sparkManLog">Spark Man</span> did
          <span id="damage"> -25</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else if (currentTurn >= 9 && random <= hitChance) {
      setHitChance(60);
      redHitChance2.style.color = "red";
      setHpPlayer1(hpPlayer1 - 25);
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog}>
          <span id="sparkManLog">Spark Man</span>did
          <span id="damage"> -25</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else {
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog} id="missed">
          Spark man missed the shot!
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
      <img src={sparkMan} alt="Shadow Man" />
      <h3>Current stats:</h3>
      <p id="redHealth2">Health: {hpPlayer2 - 35}</p>
      <p>Heals: {healCount} </p>
      <p>Spark Shock: {sparkShock}</p>
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
            <button className="sparkShock" onClick={sparkShockAttack}>
              Spark Shock
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default SparkMan2;
