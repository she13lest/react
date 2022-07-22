import React, { Component } from "react";

// const SearchField = (props) => {
//   console.log(props);
//   return (
//     <div className="search">
//       <h1 className="search__title">
//         {`Hello, ${props.name}. What to search for you?`}
//       </h1>
//       <div className="search__field">
//         <input type="text" className="search__input" />
//         <button className="search__button">Search</button>
//       </div>
//     </div>
//   );
// };

class SearchField extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="search">
        <h1 className="search__title">
          {`Hello, ${this.props.name}. What to search for you?`}
        </h1>
        <div className="search__field">
          <input type="text" className="search__input" />
          <button className="search__button">Search</button>
        </div>
      </div>
    );
  }
}

export default SearchField;
