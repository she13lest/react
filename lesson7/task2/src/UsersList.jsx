import React from "react";
import User from "./User";

class UsersList extends React.Component {
  state = {
    sorting: null,
  };

  toggleSorting = () => {
    const newSorting = this.state.sorting === "asc" ? "desc" : "asc";

    this.setState({
      sorting: newSorting,
    });
  };
  render() {
    console.log(this.props.users);
    let usersList;
    if (this.state.sorting) {
      usersList = this.props.users
        .slice()
        .sort((a, b) =>
          this.state.sorting === "asc" ? b.age - a.age : a.age - b.age
        );
    } else {
      usersList = this.props.users;
    }

    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || "-"}
        </button>

        <ul className="users">
          {usersList.map((user) => (
            <User key={user.name} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
