import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: "loading...",
    });

    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
      }),
        5000;
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (this.state.isLoggedIn === false) {
      return <Login onLogin={this.handleLogin} />;
    } else if (this.state.isLoggedIn === true) {
      return <Logout onLogout={this.handleLogout} />;
    } else if (this.state.isLoggedIn === "loading...") {
      return <Spinner size={40} />;
    }
  }
}

export default Auth;
