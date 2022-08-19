import React from "react";

const Task = ({ done, text }) => {
  const listItemClasses = `list-item ${done ? "list-item_done" : ""}`;

  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
      />
      <span className="list-item_text">{text}</span>

      <button className="list-item__delete-btn"></button>
    </li>
  );
};

export default Task;
