import React, { useState } from "react";
import "./App.js";

function App() {
  const [count, setCount] = useState(0);

  function Increase() {
    if (count < 20) {
      setCount(count + 1);
    } else {
      alert("You cannot increase count above 20 !!");
    }
  }

  function Decrease() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("You cannot decrease count below 0 !!");
    }
  }

  return (
    <div className="App">
      <h1>Welcome</h1>
      <h2>{count}</h2>
      <button onClick={Increase}>+</button>
      <button onClick={Decrease}>-</button>
    </div>
  );
}

export default App;
