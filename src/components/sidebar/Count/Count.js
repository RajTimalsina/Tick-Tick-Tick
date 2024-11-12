import React, { useState } from "react";
import "../Sidebar.css";
import "./Count.css";

function Count() {
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }
  function reset() {
    setCounter(0);
  }
  function handleClickCount() {
    console.log("count click");

    setShow((prevBool) => {
      return !prevBool;
    });
  }

  return (
    <div className="sideButton count">
      <h1 onClick={handleClickCount}>Count</h1>
      {show ? (
        <div className="show">
          <div className="showH1">
            <h1 className="counter">{counter}</h1>
          </div>
          <div className="buttonsDiv">
            <button className="changeButtons" onClick={increment}>
              Increase
            </button>
            <button className="changeButtons" onClick={decrement}>
              Decrease
            </button>
            <button className="changeButtons" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}
export default Count;
