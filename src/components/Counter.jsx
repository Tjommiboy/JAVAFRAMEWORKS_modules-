import React from "react";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  function onButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={onButtonClick}>Add 1</button>
    </div>
  );
}

export default Counter;
