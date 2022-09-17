import sparkMan from "../robots/sparkMan.jpg";

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
  function heal() {
    setHpPlayer1(hpPlayer1 + 20);
    setCurrentTurn(currentTurn + 1);
    setBattleLog([
      <li key={battleLog}>Spark man healed +20 hp</li>,
      ...battleLog,
    ]);
  }

  const attackPlayer1 = () => {
    setHpPlayer2(hpPlayer2 - 20);
    setCurrentTurn(currentTurn + 1);
    setBattleLog([
      <li key={battleLog}>Spark man did -20 damage to the enemy</li>,
      ...battleLog,
    ]);
  };

  return (
    <div>
      <img src={sparkMan} alt="Shadow Man" />
      <p>Health: {hpPlayer1 - 40}</p>
      <h2>Current stats:</h2>
      <p>Spell: </p>
      <p>Block chance: </p>
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
export default SparkMan;
