import React from "react";

class ConnectionStatus extends React.Component {
  state = {
    connection: "online",
  };

  componentDidMount() {
    window.addEventListener("online", this.onOnline);
    window.addEventListener("offline", this.onOffline);
  }

  onOnline = () => {
    this.setState({
      connection: "online",
    });
  };
  onOffline = () => {
    this.setState({
      connection: "offline",
    });
  };

  componentWillUnmount() {
    window.removeEventListener("online", this.onOnline);
    window.removeEventListener("offline", this.onOffline);
  }

  render() {
    if (this.state.connection === "offline") {
      return (
        <div className="status status_offline">{this.state.connection}</div>
      );
    }

    return <div className="status">{this.state.connection}</div>;
  }
}

export default ConnectionStatus;
