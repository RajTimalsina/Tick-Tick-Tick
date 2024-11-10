import React from "react";
import Count from "./Count";
import Timer from "./Timer";
import Pomodoro from "./Pomodoro";
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
