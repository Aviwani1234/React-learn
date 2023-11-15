import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("violet");

  function to_violet() {
    setColor("violet");
  }

  function to_indigo() {
    setColor("indigo");
  }

  function to_blue() {
    setColor("blue");
  }

  function to_green() {
    setColor("green");
  }

  function to_yellow() {
    setColor("yellow");
  }

  function to_orange() {
    setColor("orange");
  }

  function to_red() {
    setColor("red");
  }

  const divStyle = {
    width: "100vw",
    height: "100vh",
    backgroundColor: color,
  };

  return (
    <div className="box" style={divStyle}>
      <div className="btn-container">
        <button className="btn violet" onClick={to_violet}>
          Violet
        </button>

        {/* we can write onClick method as follow as well, so it reduce code length:
            onClick = {()=> setColor("violet")}
            with help of above we don't need of to_violet function*/}
            
        <button className="btn indigo" onClick={to_indigo}>
          Indigo
        </button>
        <button className="btn blue" onClick={to_blue}>
          Blue
        </button>
        <button className="btn green" onClick={to_green}>
          Green
        </button>
        <button className="btn yellow" onClick={to_yellow}>
          Yellow
        </button>
        <button className="btn orange" onClick={to_orange}>
          Orange
        </button>
        <button className="btn red" onClick={to_red}>
          Red
        </button>
      </div>
    </div>
  );
}

export default App;

