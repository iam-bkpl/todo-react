import React, { useState } from "react";

const TodoItem = ({
  todoitem,
  id,
  index,
  todoObj,
  editTodoItem,
  deleteTodoItem,
}) => {
  let [isEditable, setIsEditable] = useState(false);
  let [editedText, setEditedText] = useState(todoitem);
  let [displayBtn, setDisplayBtn] = useState(true);

  const handleUpdate = (todo) => {
    setIsEditable(true);
  };

  const handleInput = (e) => {
    setEditedText(e.target.value);
  };

  const handleCancel = () => {
    setIsEditable(false);
  };

  const handleEdit = () => {
    editTodoItem(index, editedText);
    setIsEditable(false);
  };

  const updateText = () => {
    if (isEditable) {
      return (
        <div className="col">
          <input type="text" value={editedText} onChange={handleInput} />
          <button
            className="btn btn-outline-primary mx-2 btn-sm"
            onClick={handleEdit}
          >
            Done
          </button>
          <button
            className="btn btn-outline-danger mx-2 btn-sm"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      );
    } else {
      return <p className="col">{` ${index + 1} -  ${todoitem}`}</p>;
    }
  };

  const toggleButtonDisplay = () => {
    if (displayBtn && !isEditable) {
      return (
        <div className="col">
          <button
            className="btn btn-outline-primary btn-sm mx-2"
            onClick={() => handleUpdate(todoObj)}
          >
            update
          </button>
          <button
            className="btn btn-outline-danger btn-sm mx-0"
            onClick={() => deleteTodoItem(index)}
          >
            delete
          </button>
        </div>
      );
    }
  };
  return (
    <div className="row">
      {updateText()}
      {toggleButtonDisplay()}
    </div>
  );
};

export default TodoItem;
