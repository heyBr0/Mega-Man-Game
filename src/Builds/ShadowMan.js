import shadowMan from "../robots/shadowMan.jpg";
import { useState } from "react";

const ShadowMan = ({
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
  const [hitChance, setHitChance] = useState(80);
  const [shadowBlades, setShadowBlades] = useState(1);
  let redHitChance = document.getElementById("redHitChance");
  let redHealth = document.getElementById("redHealth");

  function shadowBladesAttack() {
    if (shadowBlades === 1) {
      setShadowBlades(0);
      setHpPlayer2(hpPlayer2 - 40);
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog}>
          <span id="shadowManLog">Shadow Man</span> used
          <strong> Shadow Blades! </strong>
          <span id="damage"> -40</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else {
      setCurrentTurn(currentTurn);
      setBattleLog([
        <li key={battleLog}>No more Shadow Blades!</li>,
        ...battleLog,
      ]);
      alert("No more Shadow Blades!");
    }
  }

  function heal() {
    if (healCount === 1) {
      setHealCount(0);
      setHpPlayer1(hpPlayer1 + 20);
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog}>
          Shadow man healed <span id="heal"> +20</span> hp
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
      setHpPlayer2(hpPlayer2 - 20);
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog}>
          <span id="shadowManLog">Shadow Man</span> did
          <span id="damage"> -20</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else if (currentTurn >= 9 && random <= hitChance) {
      setHitChance(65);
      redHitChance.style.color = "red";
      setHpPlayer2(hpPlayer2 - 20);
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog}>
          <span id="shadowManLog">Shadow Man</span>did
          <span id="damage"> -20</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else {
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog} id="missed">
          Shadow man missed the shot!
        </li>,
        ...battleLog,
      ]);
    }
  };

  if (hpPlayer1 <= 80) {
    redHealth.style.color = "red";
  }

  /*  console.log(hitChance); */

  return (
    <div>
      <img src={shadowMan} alt="Shadow Man" />
      <h3>Current stats:</h3>
      <p id="redHealth">Health: {hpPlayer1 - 30}</p>
      <p>Heals: {healCount} </p>
      <p>Shadow Blades: {shadowBlades}</p>
      <p>
        Hit chance: <span id="redHitChance">{hitChance}%</span>{" "}
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
            <button className="shadowBlades" onClick={shadowBladesAttack}>
              Shadow Blades
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ShadowMan;
