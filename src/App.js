import "./App.css";

import React, { useState } from "react";
import { Calculator } from "./components/Calculator";

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [operation, setOperation] = useState("");

  function handleChange(e, num) {
    const val = Number(e.target.value);
    if (num === 1) {
      setX(val);
    } else {
      setY(val);
    }
  }

  return (
    <div>
      <input
        type="number"
        id="x"
        value={x}
        onChange={(e) => handleChange(e, 1)}
      />
      <input
        type="number"
        id="y"
        value={y}
        onChange={(e) => handleChange(e, 2)}
      />
      <button type="button" onClick={() => setOperation("+")}>
        +
      </button>
      <button type="button" onClick={() => setOperation("-")}>
        -
      </button>
      <button type="button" onClick={() => setOperation("*")}>
        *
      </button>
      <button type="button" onClick={() => setOperation("/")}>
        /
      </button>
      <button type="button" onClick={() => setOperation("^")}>
        ^
      </button>
      <Calculator x={x} y={y} operation={operation} />
    </div>
  );
};

export default App;
