import { useState } from "react";

function SuperCounter() {
  const [SuperCounter, setSuperCounter] = useState(0);

  function increase() {
    setSuperCounter(SuperCounter + 1);
  }

  function decrease() {
    if (SuperCounter > 0) {
      setSuperCounter(SuperCounter - 1);
    }
  }

  return (
    <div>
      <div>SuperCounter: {SuperCounter}</div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease} disabled={SuperCounter === 0}>
        -1
      </button>
    </div>
  );
}

export default SuperCounter;
