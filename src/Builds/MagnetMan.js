import magnetMan from "../robots/magnetMan.jpg";

const MagnetMan = ({
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
    setHpPlayer1(hpPlayer1 + 15);
    setCurrentTurn(currentTurn + 1);
    setBattleLog([
      <li key={battleLog}>Magnet man healed +15 hp</li>,
      ...battleLog,
    ]);
  }

  const attackPlayer1 = () => {
    setHpPlayer2(hpPlayer2 - 25);
    setCurrentTurn(currentTurn + 1);
    setBattleLog([
      <li key={battleLog}>Magnet man did -25 damage to the enemy</li>,
      ...battleLog,
    ]);
  };

  return (
    <div>
      <img src={magnetMan} alt="Magnet Man" />
      <p>Health: {hpPlayer1 - 20}</p>
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
export default MagnetMan;
