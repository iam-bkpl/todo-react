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
        <br />
        <input
          className="p-2 rounded-pill border border-primary"
          value={text}
          placeholder="Enter Your todo here"
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
