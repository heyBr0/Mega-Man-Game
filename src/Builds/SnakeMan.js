import snakeMan from "../robots/snakeMan.jpg";

const SnakeMan = ({
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
    setHpPlayer1(hpPlayer1 + 30);
    setCurrentTurn(currentTurn + 1);
    setBattleLog([
      <li key={battleLog}>Snake man healed +30 hp</li>,
      ...battleLog,
    ]);
  }

  const attackPlayer1 = () => {
    setHpPlayer2(hpPlayer2 - 30);
    setCurrentTurn(currentTurn + 1);
    setBattleLog([
      <li key={battleLog}>Snake man did -30 damage to the enemy</li>,
      ...battleLog,
    ]);
  };

  return (
    <div>
      <img src={snakeMan} alt="Shadow Man" />
      <p>Health: {hpPlayer1 - 50}</p>
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
export default SnakeMan;
