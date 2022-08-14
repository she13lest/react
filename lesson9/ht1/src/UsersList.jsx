import React from "react";
import User from "./User";
import Filter from "./Filter";

class UserList extends React.Component {
  state = {
    users: this.props.users,
    filterText: "",
  };

  handleChange = (e) => {
    e.preventDefault();

    this.setState({
      filterText: e.target.value,
    });
  };

  render() {
    console.log(this.state.filterText);
    let newUsersList;
    newUsersList = !this.state.filterText
      ? this.state.users
      : this.state.users.filter((user) =>
          user.name.toUpperCase().includes(this.state.filterText.toUpperCase())
        );

    return (
      <div>
        <Filter
          onChange={this.handleChange}
          filterText={this.state.filterText}
          count={newUsersList.length}
        />
        <ul className="users">
          {newUsersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
