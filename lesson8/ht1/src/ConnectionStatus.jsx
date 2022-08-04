import React from "react";

class ConnectionStatus extends React.Component {
  state = {
    user: null,
  };

  render() {
    return <div className="status status_offline">Offline</div>;
  }
}

export default ConnectionStatus;
