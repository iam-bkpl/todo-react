import React, { useState } from "react";

const TodoInput = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(text);
    setText("");
  };

  return (
    <div className="container mx-3">
      <form onSubmit={handleSubmit}>
        <input
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
