import sparkMan from "../robots/sparkMan.jpg";
import { useState } from "react";
import sparkBlasterSound from "../Audio/sparkBlaster.wav";
import standardAttack from "../Audio/standardAttack.wav";
import healingSound from "../Audio/healing.wav";
import noMoreSound from "../Audio/noMore.wav";
import missedSound from "../Audio/missed.wav";

const SparkMan = ({
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
  let redHitChance = document.getElementById("redHitChance");
  let redHealth = document.getElementById("redHealth");

  function playSparkBlaster() {
    const selectAudio = new Audio(sparkBlasterSound);
    selectAudio.volume = 0.3;
    selectAudio.play();
  }

  function playStandardAttack() {
    const selectAudio = new Audio(standardAttack);
    selectAudio.volume = 0.3;
    selectAudio.play();
  }

  function playHealing() {
    const selectAudio = new Audio(healingSound);
    selectAudio.volume = 0.3;
    selectAudio.play();
  }

  function playNoMore() {
    const selectAudio = new Audio(noMoreSound);
    selectAudio.volume = 0.3;
    selectAudio.play();
  }

  function playMissed() {
    const selectAudio = new Audio(missedSound);
    selectAudio.volume = 0.4;
    selectAudio.play();
  }

  function sparkShockAttack() {
    if (sparkShock === 1) {
      setSparkShock(0);
      setHpPlayer2(hpPlayer2 - 30);
      setCurrentTurn(currentTurn + 1);
      playSparkBlaster();
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
      playNoMore();
      setBattleLog([
        <li key={battleLog}>No more Spark Shock!</li>,
        ...battleLog,
      ]);
      /*  alert("No more Spark Shock!"); */
    }
  }

  function heal() {
    if (healCount === 1) {
      setHealCount(0);
      setHpPlayer1(hpPlayer1 + 15);
      setCurrentTurn(currentTurn + 1);
      playHealing();
      setBattleLog([
        <li key={battleLog}>
          <span id="sparkManLog">Spark Man</span> healed
          <span id="heal"> +15</span> hp
        </li>,
        ...battleLog,
      ]);
    } else {
      setHpPlayer1(hpPlayer1);
      playNoMore();
      setCurrentTurn(currentTurn);
      setBattleLog([<li key={battleLog}>No more heals!</li>, ...battleLog]);
      /*  alert("You have no more heals!"); */
    }
  }

  const attackPlayer1 = () => {
    let random = Math.floor(Math.random() * 100);
    if (random <= hitChance && currentTurn < 9) {
      setHpPlayer2(hpPlayer2 - 25);
      setCurrentTurn(currentTurn + 1);
      playStandardAttack();
      setBattleLog([
        <li key={battleLog}>
          <span id="sparkManLog">Spark Man</span> did
          <span id="damage"> -25</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else if (currentTurn >= 9 && random <= hitChance) {
      setHitChance(60);
      redHitChance.style.color = "red";
      setHpPlayer2(hpPlayer2 - 25);
      setCurrentTurn(currentTurn + 1);
      playStandardAttack();
      setBattleLog([
        <li key={battleLog}>
          <span id="sparkManLog">Spark Man</span>did
          <span id="damage"> -25</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else {
      setCurrentTurn(currentTurn + 1);
      playMissed();
      setBattleLog([
        <li key={battleLog} id="missed">
          Spark man missed the shot!
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
      <img src={sparkMan} alt="Spark Man" />
      <h3>Current stats:</h3>
      <p id="redHealth">Health: {hpPlayer1 - 35}</p>
      <p>Heals: {healCount} </p>
      <p>Spark Shock: {sparkShock}</p>
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
            <button className="sparkShock" onClick={sparkShockAttack}>
              Spark Shock
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default SparkMan;
