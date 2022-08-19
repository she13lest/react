import React from "react";
import CreateTaskInput from "./CreateTaskInput";
import Task from "./Task";

class Taskslist extends React.Component {
  state = {
    tasks: [
      { text: "Buy milk", done: false, id: 1 },
      { text: "Pick up Tom from airport", done: false, id: 2 },
      { text: "Visit party", done: false, id: 3 },
      { text: "Visit doctor", done: true, id: 4 },
      { text: "Buy meat", done: true, id: 5 },
    ],
  };
  render() {
    return (
      <main className="todo-list">
        <CreateTaskInput />
        <ul className="list">
          {this.state.tasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </ul>
      </main>
    );
  }
}

export default Taskslist;
