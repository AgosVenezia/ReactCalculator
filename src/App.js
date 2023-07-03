import React, { useState } from "react";
import Calculator from "./components/Calculator";

function App() {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState();

  return (
    <div className="App">
      <Calculator
        display={display}
        setDisplay={setDisplay}
        equation={equation}
        setEquation={setEquation}
      />
    </div>
  );
}

export default App;
