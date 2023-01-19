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
          <button className="btn btn-primary m-2" onClick={handleEdit}>
            Done
          </button>
          <button className="btn btn-danger m-2" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      );
    } else {
      return <p className="col"> {todoitem}</p>;
    }
  };

  return (
    <div className="row">
      {updateText()}
      <div className="col">
        <button
          className="btn btn-primary"
          onClick={() => handleUpdate(todoObj)}
        >
          update
        </button>
        <button
          className="btn btn-danger"
          onClick={() => deleteTodoItem(index)}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
