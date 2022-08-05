import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import User from "./User";

const elementRoot = document.querySelector("#root");

ReactDOM.render(<User userId="Github" />, elementRoot);
