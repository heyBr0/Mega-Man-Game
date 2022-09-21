import magnetMan from "../robots/magnetMan.jpg";
import { useState } from "react";
import magnetBlasterSound from "../Audio/magnetBlaster.wav";
import standardAttack from "../Audio/standardAttack.wav";
import healingSound from "../Audio/healing.wav";
import noMoreSound from "../Audio/noMore.wav";
import missedSound from "../Audio/missed.wav";

const MagnetMan2 = ({
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
  let redHitChance2 = document.getElementById("redHitChance2");
  let redHealth2 = document.getElementById("redHealth2");

  function playMagnetBlaster() {
    const selectAudio = new Audio(magnetBlasterSound);
    selectAudio.volume = 0.4;
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

  function MagnetRocketAttack() {
    if (magnetRocket === 1) {
      setMagnetRocket(0);
      setHpPlayer1(hpPlayer1 - 35);
      setCurrentTurn(currentTurn + 1);
      playMagnetBlaster();
      setBattleLog([
        <li key={battleLog}>
          <span id="magnetManLog">Magnet Man</span> used
          <strong> Magnet Rocket! </strong>
          <span id="damage"> -35</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else {
      setCurrentTurn(currentTurn);
      playNoMore();
      setBattleLog([
        <li key={battleLog}>No more Magnet Rocket!</li>,
        ...battleLog,
      ]);
      /*      alert("No more Magnet Rocket!"); */
    }
  }

  function heal() {
    if (healCount === 1) {
      setHealCount(0);
      setHpPlayer2(hpPlayer2 + 10);
      setCurrentTurn(currentTurn + 1);
      playHealing();
      setBattleLog([
        <li key={battleLog}>
          <span id="magnetManLog">Magnet Man</span> healed{" "}
          <span id="heal"> +10</span> hp
        </li>,
        ...battleLog,
      ]);
    } else {
      setHpPlayer2(hpPlayer2);
      playNoMore();
      setCurrentTurn(currentTurn);
      setBattleLog([<li key={battleLog}>No more heals!</li>, ...battleLog]);
      /*      alert("You have no more heals!"); */
    }
  }

  const attackPlayer2 = () => {
    let random = Math.floor(Math.random() * 100);
    if (random <= hitChance && currentTurn < 9) {
      setHpPlayer1(hpPlayer1 - 30);
      setCurrentTurn(currentTurn + 1);
      playStandardAttack();
      setBattleLog([
        <li key={battleLog}>
          <span id="magnetManLog">Magnet Man</span> did
          <span id="damage"> -30</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else if (currentTurn >= 9 && random <= hitChance) {
      setHitChance(60);
      redHitChance2.style.color = "red";
      setHpPlayer1(hpPlayer1 - 30);
      setCurrentTurn(currentTurn + 1);
      playStandardAttack();
      setBattleLog([
        <li key={battleLog}>
          <span id="magnetManLog">Magnet Man</span>did
          <span id="damage"> -30</span> damage to the enemy
        </li>,
        ...battleLog,
      ]);
    } else {
      setCurrentTurn(currentTurn + 1);
      playMissed();
      setBattleLog([
        <li key={battleLog} id="missed">
          Magnet man missed the shot!
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
      <img src={magnetMan} alt="Magnet Man" />
      <h3>Current stats:</h3>
      <p id="redHealth2">Health: {hpPlayer2 - 25}</p>
      <p>Heals: {healCount} </p>
      <p>Magnet Rocket: {magnetRocket}</p>
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
            <button className="magnetRocket" onClick={MagnetRocketAttack}>
              Magnet Rocket
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default MagnetMan2;
