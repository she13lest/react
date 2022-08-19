import React from "react";

const CreateTaskInput = () => {
  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        defaultChecked="false"
      />
      <button className="btn create-task__btn">Create</button>
    </div>
  );
};

export default CreateTaskInput;