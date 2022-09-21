import shadowMan from "../robots/shadowMan.jpg";
import { useState } from "react";
import shadowBladesSound from "../Audio/shadowBlaster.wav";
import standardAttack from "../Audio/standardAttack.wav";
import healingSound from "../Audio/healing.wav";
import noMoreSound from "../Audio/noMore.wav";
import missedSound from "../Audio/missed.wav";

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

  function playShadowBlades() {
    const selectAudio = new Audio(shadowBladesSound);
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

  function shadowBladesAttack() {
    if (shadowBlades === 1) {
      setShadowBlades(0);
      setHpPlayer2(hpPlayer2 - 35);
      setCurrentTurn(currentTurn + 1);
      playShadowBlades();
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
      playNoMore();
      setBattleLog([
        <li key={battleLog}>No more Shadow Blades!</li>,
        ...battleLog,
      ]);
      /*  alert("No more Shadow Blades!"); */
    }
  }

  function heal() {
    if (healCount === 1) {
      setHealCount(0);
      setHpPlayer1(hpPlayer1 + 20);
      setCurrentTurn(currentTurn + 1);
      playHealing();
      setBattleLog([
        <li key={battleLog}>
          <span id="shadowManLog">Shadow Man</span> healed{" "}
          <span id="heal"> +20</span> hp
        </li>,
        ...battleLog,
      ]);
    } else {
      setHpPlayer1(hpPlayer1);
      playNoMore();
      setCurrentTurn(currentTurn);
      setBattleLog([<li key={battleLog}>No more heals!</li>, ...battleLog]);
      /*    alert("You have no more heals!"); */
    }
  }

  const attackPlayer1 = () => {
    let random = Math.floor(Math.random() * 100);
    if (random <= hitChance && currentTurn < 9) {
      setHpPlayer2(hpPlayer2 - 20);
      setCurrentTurn(currentTurn + 1);
      playStandardAttack();
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
      playStandardAttack();
      setBattleLog([
        <li key={battleLog}>
          <span id="shadowManLog">Shadow Man</span> did
          <span id="damage"> -20</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else {
      setCurrentTurn(currentTurn + 1);
      playMissed();
      setBattleLog([
        <li key={battleLog} id="missed">
          Shadow man missed the shot!
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
