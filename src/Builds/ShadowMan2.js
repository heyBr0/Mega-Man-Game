import shadowMan from "../robots/shadowMan.jpg";

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
  function heal() {
    setHpPlayer2(hpPlayer2 + 20);
    setCurrentTurn(currentTurn + 1);
    setBattleLog([
      <li key={battleLog}>Shadow man healed +20 hp</li>,
      ...battleLog,
    ]);
  }

  const attackPlayer2 = () => {
    setHpPlayer1(hpPlayer1 - 20);
    setCurrentTurn(currentTurn + 1);
    setBattleLog([
      <li key={battleLog}>Shadow man did -20 damage to the enemy</li>,
      ...battleLog,
    ]);
  };

  return (
    <div>
      <img src={shadowMan} alt="Shadow Man" />
      <p>Health: {hpPlayer2 - 30}</p>
      <h2>Current stats:</h2>
      <p>Spell: </p>
      <p>Block chance: </p>
      <div>
        {currentTurn % 2 === 1 && (
          <div>
            <button onClick={heal}>Heal</button>
            <button onClick={attackPlayer2}>Attack</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ShadowMan2;
