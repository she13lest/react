import React from "react";

class ConnectionStatus extends React.Component {
  state = {
    connection: "online",
    css: "status",
  };

  componentDidMount() {
    window.addEventListener("online", this.onOnline);
    window.addEventListener("offline", this.onOffline);
  }

  onOnline = () => {
    this.setState({
      connection: "online",
      css: "status",
    });
  };
  onOffline = () => {
    this.setState({
      connection: "offline",
      css: "status status_offline",
    });
  };

  componentWillUnmount() {
    window.removeEventListener("online", this.onOnline);
    window.removeEventListener("offline", this.onOffline);
  }

  render() {
    return <div className={this.state.css}>{this.state.connection}</div>;
  }
}

export default ConnectionStatus;
