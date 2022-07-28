import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Mailbox from "./Mailbox";

const elementRoot = document.querySelector("#root");

ReactDOM.render(<Mailbox unreadMessages={[]} />, elementRoot);
