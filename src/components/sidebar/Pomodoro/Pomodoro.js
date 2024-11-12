import React, { useState, useEffect } from "react";
import "../Sidebar.css";
import "./Pomodoro.css";
import "../Count/Count.css";

function Pomodoro() {
  const [show, setShow] = useState(false);
  function handleClickPomodoro() {
    console.log("Clicked pomodoro");

    setShow((prevBool) => {
      return !prevBool;
    });
  }

  const [min, setMin] = useState(25);
  const [sec, setSec] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setSec((prevSec) => {
          if (prevSec === 0) {
            if (min === 0) {
              clearInterval(intervalId);
              setIsActive(false);
              return 0;
            } else {
              setMin((prevMin) => prevMin - 1);
              return 59;
            }
          } else {
            return prevSec - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, min]);

  function startPomodoro() {
    setIsActive(true);
  }

  function resetPomodoro() {
    setIsActive(false);
    setMin(25);
    setSec(0);
  }

  return (
    <div className="sideButton pomodoro">
      <h1 onClick={handleClickPomodoro}>Pomodoro</h1>

      {show ? (
        <div className="show">
          <div className="showH1">
            <h1 className="pomodoroH1">
              {min}:{sec}
            </h1>
          </div>
          <div className="buttonsDiv">
            <button className="changeButtons" onClick={startPomodoro}>
              Start
            </button>
            <button className="changeButtons" onClick={resetPomodoro}>
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

export default Pomodoro;
