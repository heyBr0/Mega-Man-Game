import { useState } from "react";
import shadowMan from "./robots/shadowMan.jpg";
import snakeMan from "./robots/snakeMan.jpg";
import magnetMan from "./robots/magnetMan.jpg";
import sparkMan from "./robots/sparkMan.jpg";

function Fight({ fightBox, ROBOTS }) {
  /*   console.log(fightBox); */
  /*   let shadowManHp = 120;
  let snakeManHo = 100;
  let magnetManHo = 130;
  let sparkManHp = 110; */

  const shadowDamage = 30;
  const magnetDamage = 20;

  const [battleLog, setBattleLog] = useState([]);

  const [robot0, setRobot0] = useState(fightBox[0]);
  const [robot1, setRobot1] = useState(fightBox[1]);

  for (let i = 0; i < ROBOTS.length; i++) {
    if (robot0 === ROBOTS[i].name) {
      setRobot0(ROBOTS[i]);
    }
    /*     console.log(robot0); */
  }

  for (let i = 0; i < ROBOTS.length; i++) {
    if (robot1 === ROBOTS[i].name) {
      setRobot1(ROBOTS[i]);
    }
    /*    console.log(robot1); */
  }

  const initialHealth0 = robot0.hp;
  const initialHealth1 = robot1.hp;
  console.log(robot0.hp, robot1.hp);
  const [robotHealth0, setRobotHealth0] = useState(initialHealth0);
  const [robotHealth1, setRobotHealth1] = useState(initialHealth1);
  console.log(initialHealth0, initialHealth0);
  console.log(robotHealth0, robotHealth1);
  const shadowAttack = (e) => {
    e.preventDefault();
    let result = robot1.hp - shadowDamage;
    setRobotHealth1(result);

    setBattleLog([
      <li key={battleLog}>
        {robot0.name} did {shadowDamage} damage to {robot1.name}
      </li>,
      ...battleLog,
    ]);
  };

  const magnetAttack = (e) => {
    e.preventDefault();
    let result = robot0.hp - magnetDamage;
    setRobotHealth0(result);

    setBattleLog([
      <li key={battleLog}>
        {robot1.name} did {magnetDamage} damage to {robot0.name}
      </li>,
      ...battleLog,
    ]);
  };

  function pageReset() {
    window.location.reload(false);
  }

  return (
    <div>
      <h1>
        [{fightBox[0]} <span>vs</span> {fightBox[1]}]
      </h1>

      <div id="info">
        <div id="infoLeft">
          <section>
            {robot0.name === "Shadow Man" && (
              <img src={shadowMan} alt="Shadow Man" />
            )}
            {robot0.name === "Snake Man" && (
              <img src={snakeMan} alt="Snake Man" />
            )}
            {robot0.name === "Magnet Man" && (
              <img src={magnetMan} alt="Magnet Man" />
            )}
            {robot0.name === "Spark Man" && (
              <img src={sparkMan} alt="Spark Man" />
            )}
          </section>
          <h2>{robotHealth0} hp</h2>
          <h2>{robot0.attack}</h2>
          <button onClick={shadowAttack}>Shadow Attack</button>
        </div>
        <div id="displayInfo">
          <h4> Battle Log: </h4>

          {battleLog}
          <p>Battle begin!</p>
        </div>
        <div id="infoRight">
          <section>
            {robot1.name === "Shadow Man" && (
              <img src={shadowMan} alt="Shadow Man" />
            )}
            {robot1.name === "Snake Man" && (
              <img src={snakeMan} alt="Snake Man" />
            )}
            {robot1.name === "Magnet Man" && (
              <img src={magnetMan} alt="Magnet Man" />
            )}
            {robot1.name === "Spark Man" && (
              <img src={sparkMan} alt="Spark Man" />
            )}
          </section>
          <h2>{robotHealth1} hp</h2>

          <h2>{robot1.attack}</h2>
          <button onClick={magnetAttack}>Magnet Attack</button>
        </div>
      </div>

      <button onClick={pageReset} id="reset">
        Restart Game
      </button>
    </div>
  );
}

export default Fight;
