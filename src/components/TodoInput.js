import React, { useState } from "react";

const TodoInput = ({
  onSubmit,
  placeholderText,
  setPlaceholder,
  setSearchText,
}) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <div className="container mx-3">
      <form onSubmit={handleSubmit}>
        <br />
        <input
          className="p-2 rounded-pill border border-primary"
          value={text}
          placeholder={placeholderText}
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default TodoInput;
