import React, { useState } from "react";
import "./App.css";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    let id = 1;
    if (tasks.length > 0) {
      id = tasks[0] + 1;
    }
    let task = { id: id, text: text, completed: false };
    let newTasks = [task, ...tasks];
    setTasks(newTasks);
  };
  return (
    <div className="App">
      <h1>Today is a wonderful day</h1>
      <TaskForm addTask={addTask} />
      {tasks.map((task, index) => {
        return <TaskItem task={task} key={index} />;
      })}
    </div>
  );
}

export default App;
