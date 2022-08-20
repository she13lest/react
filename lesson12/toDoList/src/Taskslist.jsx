import React from "react";
import CreateTaskInput from "./CreateTaskInput";
import Task from "./Task";

const baseUrl = "https://6300ebba9a1035c7f8fab151.mockapi.io/tasks";

class Taskslist extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasksList();
  }

  fetchTasksList = () => {
    fetch(baseUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((taskslist) => {
        this.setState({
          tasks: taskslist,
        });
      });
  };

  onCreate = (text) => {
    const newTask = {
      text,
      done: false,
    };

    fetch(baseUrl, {
      method: "POST",
      header: {
        "Content-Type": "application/json;utc-8",
      },
      body: JSON.stringify(newTask),
    }).then((response) => {
      if (response.ok) {
        this.fetchTasksList();
      } else {
        throw new Error("Failed to create task");
      }
    });
  };

  hanleTaskStatusChange = (id) => {
    const updatedTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    this.setState({ tasks: updatedTasks });
  };

  handleTaskDelete = (id) => {
    fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {
        this.fetchTasksList();
      } else {
        throw new Error("Failed to delete task");
      }
    });
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onChange={this.hanleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default Taskslist;
