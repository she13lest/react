import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./search.scss";
import SearchField from "../../task1/src/Search.jsx";

const rootElement = document.querySelector("#root");

ReactDOM.render(<SearchField name="Brenda" />, rootElement);
