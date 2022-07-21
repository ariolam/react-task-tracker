import "./App.css";
import Tasks from "./Tasks.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="task-overview">
          <h1> Today is a wonderful day </h1>
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  placeholder="Enter a new task"
                  autoFocus="on"
                  className="form-control mt-3"
                />
              </div>
              <div className="col-3">
                <input
                  type="button"
                  value="Add"
                  class="btn btn-outline-warning mt-3 text-white"
                />
              </div>
            </div>
          </form>
          <Tasks />
        </div>
      </div>
    </div>
  );
}

export default App;
