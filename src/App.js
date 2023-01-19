import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState([]);
  let [count, setCount] = useState(0);

  const onSubmit = (new_todo) => {
    setTodo([
      ...todo,
      {
        id: count,
        text: new_todo,
      },
    ]);
    setCount((count = count + 1));
  };
  const deleteTodoItem = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };
  const editTodoItem = (index, editedTodo) => {
    const oldTodo = [...todo];
    const newTodo = (oldTodo[index].text = editedTodo);
    setTodo(oldTodo);
  };
  return (
    <div>
      <Navbar todoCount={count} />
      <div className="container">
        <TodoInput onSubmit={onSubmit} />
        <TodoList
          todolist={todo}
          setTodo={setTodo}
          editTodoItem={editTodoItem}
          deleteTodoItem={deleteTodoItem}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
