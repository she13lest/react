import React from "react";

class Search extends React.Component {
  render() {
    return (
      <form class="search">
        <input type="text" class="search__input" />
        <button class="search__button">Search</button>
      </form>
    );
  }
}

export default Search;
