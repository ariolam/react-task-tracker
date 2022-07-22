import React from "react";
import "./App.css";

export default function TaskItem(props) {
  return <div className="Task-row mt-2">{props.task.text}</div>;
}
