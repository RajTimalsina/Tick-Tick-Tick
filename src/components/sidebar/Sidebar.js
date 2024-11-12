import React from "react";
import Count from "./Count/Count";
import Timer from "./Timer/Timer";
import Pomodoro from "./Pomodoro/Pomodoro";
import "./Sidebar.css";

function Sideber() {
  return (
    <div className="sidebar">
      <Count />
      <Pomodoro />
      <Timer />
    </div>
  );
}
export default Sideber;
