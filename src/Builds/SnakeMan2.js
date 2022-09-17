import snakeMan from "../robots/snakeMan.jpg";

const SnakeMan2 = ({
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
    setHpPlayer2(hpPlayer2 + 30);
    setCurrentTurn(currentTurn + 1);
    setBattleLog([
      <li key={battleLog}>Snake man healed +30 hp</li>,
      ...battleLog,
    ]);
  }

  const attackPlayer2 = () => {
    setHpPlayer1(hpPlayer1 - 30);
    setCurrentTurn(currentTurn + 1);
    setBattleLog([
      <li key={battleLog}>Snake man did -30 damage to the enemy</li>,
      ...battleLog,
    ]);
  };

  return (
    <div>
      <img src={snakeMan} alt="Snake Man" />
      <p>Health: {hpPlayer2 - 50}</p>
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
export default SnakeMan2;
