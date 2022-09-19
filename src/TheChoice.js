
import shadowMan from "./robots/shadowMan.jpg";
import snakeMan from "./robots/snakeMan.jpg";
import magnetMan from "./robots/magnetMan.jpg";
import sparkMan from "./robots/sparkMan.jpg";

function TheChoice({ choose, chooseRobot, ROBOTS, chooseEnemy }) {


  if (choose) {
    return (
      <div>
        <h1 id="totalH1">Mega Man Arena</h1>
        <h3>Choose your <span id="robot">robot master</span>:</h3>

        <div className="theChoice">
          <div id="shadowMan">
            <h2>{ROBOTS[0].name}</h2>
            <div>
            <h4>{ROBOTS[0].hp} hp</h4>
            <h4>{ROBOTS[0].attack}</h4>
            <h4>Heals: {ROBOTS[0].heals}</h4>
            <h4>Hit chance: {ROBOTS[0].hitChance}</h4>
            </div>            
            <img src={shadowMan} alt="Shadow Man" />
            <button onClick={chooseRobot} name="Shadow Man" >
              Choose your robot
            </button>
          </div>
          <div id="snakeMan">
            <h2>{ROBOTS[1].name}</h2>
            <div>
            <h4>{ROBOTS[1].hp} hp</h4>
            <h4>{ROBOTS[1].attack}</h4>
            <h4>Heals: {ROBOTS[1].heals}</h4>
            <h4>Hit chance: {ROBOTS[1].hitChance}</h4>
            </div>  
            <img src={snakeMan} alt="Snake Man" />
            <button onClick={chooseRobot} name="Snake Man">
              Choose your robot
            </button>
          </div>
          <div id="magnetMan">
            <h2>{ROBOTS[2].name}</h2>
            <div>
            <h4>{ROBOTS[2].hp} hp</h4>
            <h4>{ROBOTS[2].attack}</h4>
            <h4>Heals: {ROBOTS[2].heals}</h4>
            <h4>Hit chance: {ROBOTS[2].hitChance}</h4>
            </div>  
            <img src={magnetMan} alt="Magnet Man" />
            <button onClick={chooseRobot} name="Magnet Man">
              Choose your robot
            </button>
          </div>
          <div id="sparkMan">
            <h2>{ROBOTS[3].name}</h2>
            <div>
            <h4>{ROBOTS[3].hp} hp</h4>
            <h4>{ROBOTS[3].attack}</h4>
            <h4>Heals: {ROBOTS[3].heals}</h4>
            <h4>Hit chance: {ROBOTS[3].hitChance}</h4>
            </div>  
            <img src={sparkMan} alt="Spark Man" />
            <button onClick={chooseRobot} name="Spark Man">
              Choose your robot
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
           <h1 id="totalH1">Mega Man Arena</h1>
        <h3>Choose the <span id="enemy">enemy</span>:</h3>
        <div className="theChoice">
          <div id="shadowMan">
            <h2>{ROBOTS[0].name}</h2>
            <div>
            <h4>{ROBOTS[0].hp} hp</h4>
            <h4>{ROBOTS[0].attack}</h4>
            <h4>Heals: {ROBOTS[0].heals}</h4>
            <h4>Hit chance: {ROBOTS[0].hitChance}</h4>
            </div> 
            <img src={shadowMan} alt="Shadow Man" />
            <button onClick={chooseEnemy} name="Shadow Man">
              Choose the enemy
            </button>
          </div>

          <div id="snakeMan">
            <h2>{ROBOTS[1].name}</h2>
            <div>
            <h4>{ROBOTS[1].hp} hp</h4>
            <h4>{ROBOTS[1].attack}</h4>
            <h4>Heals: {ROBOTS[1].heals}</h4>
            <h4>Hit chance: {ROBOTS[1].hitChance}</h4>
            </div> 
            <img src={snakeMan} alt="Snake Man" />
            <button onClick={chooseEnemy} name="Snake Man">
              Choose the enemy
            </button>
          </div>
          <div id="magnetMan">
            <h2>{ROBOTS[2].name}</h2>
            <div>
            <h4>{ROBOTS[2].hp} hp</h4>
            <h4>{ROBOTS[2].attack}</h4>
            <h4>Heals: {ROBOTS[2].heals}</h4>
            <h4>Hit chance: {ROBOTS[2].hitChance}</h4>
            </div> 
            <img src={magnetMan} alt="Magnet Man" />
            <button onClick={chooseEnemy} name="Magnet Man">
              Choose the enemy
            </button>
          </div>
          <div id="sparkMan">
            <h2>{ROBOTS[3].name}</h2>
            <div>
            <h4>{ROBOTS[3].hp} hp</h4>
            <h4>{ROBOTS[3].attack}</h4>
            <h4>Heals: {ROBOTS[3].heals}</h4>
            <h4>Hit chance: {ROBOTS[3].hitChance}</h4>
            </div> 
            <img src={sparkMan} alt="Spark Man" />
            <button onClick={chooseEnemy} name="Spark Man">
              Choose the enemy
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TheChoice;
