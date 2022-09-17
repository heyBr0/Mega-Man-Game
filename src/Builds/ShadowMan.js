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

  console.log(hitChance);

  return (
    <div>
      <img src={shadowMan} alt="Shadow Man" />
      <h3>Current stats:</h3>
      <p>Health: {hpPlayer1 - 30}</p>
      <p>Heals: {healCount} </p>
      <p>Hit chance: {hitChance}% </p>
      <div>
        {currentTurn % 2 === 0 && (
          <div>
            <button onClick={heal}>Heal</button>
            <button onClick={attackPlayer1}>Attack</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ShadowMan;
