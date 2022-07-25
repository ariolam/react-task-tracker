import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsCheckSquareFill } from "react-icons/bs";
import "./App.css";

export default function TaskItem(props) {
  const { task, deleteTask, completeTask } = props;
  return (
    <div className={task.completed ? "task-row complete" : "task-row"}>
      {task.text}
      <div className="icons">
        <BsCheckSquareFill
          style={{ marginRight: 5 }}
          onClick={() => completeTask(task.id)}
        />
        <RiDeleteBin6Fill onClick={() => deleteTask(task.id)} />
      </div>
    </div>
  );
}
