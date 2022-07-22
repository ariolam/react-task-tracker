import React, { useState } from "react";
import "./App.css";

export default function TaskForm() {
  const [input, setInput] = useState("");

  function submitTask(event) {
    event.preventDefault();
    setInput("");
  }

  function updateTask(event) {
    setInput(event.target.value);
  }
  return (
    <div className="TaskForm">
      <div className="container">
        <div className="task-overview">
          <form onSubmit={submitTask}>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  placeholder="Enter a new task"
                  autoFocus="on"
                  className="form-control mt-3"
                  onChange={updateTask}
                  value={input}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Add"
                  class="btn btn-outline-warning mt-3 text-white"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}