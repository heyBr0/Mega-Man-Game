import shadowMan from "../robots/shadowMan.jpg";
import { useState } from "react";

const ShadowMan2 = ({
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
  let redHitChance2 = document.getElementById("redHitChance2");
  let redHealth2 = document.getElementById("redHealth2");

  function shadowBladesAttack() {
    if (shadowBlades === 1) {
      setShadowBlades(0);
      setHpPlayer1(hpPlayer1 - 40);
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
      setHpPlayer2(hpPlayer2 + 20);
      setCurrentTurn(currentTurn + 1);
      setBattleLog([
        <li key={battleLog}>
           <span id="shadowManLog">Shadow Man</span> healed <span id="heal"> +20</span> hp
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
      setHpPlayer1(hpPlayer1 - 20);
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
      redHitChance2.style.color = "red";
      setHpPlayer1(hpPlayer1 - 20);
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

  if (hpPlayer2 <= 70) {
    redHealth2.style.color = "red";
  }
  return (
    <div>
      <img src={shadowMan} alt="Shadow Man" />
      <h3>Current stats:</h3>
      <p id="redHealth2">Health: {hpPlayer2 - 30}</p>
      <p>Heals: {healCount} </p>
      <p>Shadow Blades: {shadowBlades}</p>
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
            <button className="shadowBlades" onClick={shadowBladesAttack}>
              Shadow Blades
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ShadowMan2;
