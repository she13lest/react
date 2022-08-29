import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import ConnectionStatus from "./ConnectionStatus";

const elementRoot = document.querySelector("#root");

ReactDOM.render(<ConnectionStatus />, elementRoot);
