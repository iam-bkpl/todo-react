import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todolist, setTodo, deleteTodoItem, editTodoItem }) => {
  return (
    <div className="container mt-4">
      {todolist.map((todo, index) => {
        return (
          <TodoItem
            todoObj={todo}
            key={todo.id}
            index={index}
            todoitem={todo.text}
            setTodo={setTodo}
            editTodoItem={editTodoItem}
            deleteTodoItem={deleteTodoItem}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
