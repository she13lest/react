import React from "react";
import Dialog from "./Dialog";

class App extends React.Component {
  render() {
    return (
      <div class="app">
        <button class="btn">Show dialog</button>
        <Dialog />
      </div>
    );
  }
}

export default App;
