import { useState } from "react";
import HPContext from "./HPcontext"

const HPContextProvider = ({ children }) => {
  const [hpPlayer1, setHpPlayer1] = useState(150);
  const [hpPlayer2, setHpPlayer2] = useState(150);

 return (
    <div>
      <HPContext.Provider value={[hpPlayer1, hpPlayer2, setHpPlayer1, setHpPlayer2]}>
        {children}
      </HPContext.Provider>
    </div>
  );
};

export default HPContextProvider;