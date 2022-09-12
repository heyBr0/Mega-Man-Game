import { useState } from "react";
import TheChoice from "./TheChoice";



function RobotMaster({ fightBox, setFightBox, ROBOTS }) {
  /*   const [name, setName] = useState("");
  
  const [magic, setMagic] = useState(0);
  const [skills, setSkills] = useState([]);
  const [extraSkill, setExtraSkill] = useState(true);
*/
  const [display, setDisplay] = useState("");
  const [choose, setChoose] = useState(true);


  const chooseRobot = (e) => {
    setDisplay("Your character is " + e.target.name);
    setChoose((choose) => !choose);
    setFightBox([...fightBox, e.target.name]);
    
  };

  const chooseEnemy = (e) => {
    setDisplay([...display, " / Your enemy is " + e.target.name]);
    setChoose((choose) => !choose);
    setFightBox([...fightBox, e.target.name]);
  };

  function pageReset() {
    window.location.reload(false);
  }

  return (
    <div className="RobotMaster">
      <div>
        <TheChoice
          choose={choose}
          chooseRobot={chooseRobot}
          ROBOTS={ROBOTS}
          chooseEnemy={chooseEnemy}
         
        />
      </div>
  
      <h3>Display:</h3>
      <div id="display">{display}</div>
      <button onClick={pageReset} id="reset">Reset</button>
    </div>
  );
}

export default RobotMaster;
