import React from "react";
import ShoppingCart from "./ShoppingCart";
import Profile from "./Profile";

class App extends React.Component {
  state = {
    userData: {
      firstName: "Tom",
      lastName: "Ford",
    },
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div className="page">
        <h1 className="title"> {this.state.userData.name} </h1>
        <main className="content">
          <ShoppingCart userData={this.state.userData} />
          <Profile
            userData={this.state.userData}
            handleChange={this.handleChange}
          />
        </main>
      </div>
    );
  }
}

export default App;
