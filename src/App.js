import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NoPage from "./components/NoPage";

// components
// import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// accounts
// import Login from "./components/accounts/Login";
// import Register from "./components/accounts/Register";
// minor change
const App = () => {
  const [todo, setTodo] = useState([]);
  let [count, setCount] = useState(0);
  const [placeholderText, setPlaceholderText] = useState("Enter you todo");
  const [searchText, setSearchText] = useState("");
  const [btnState, setBtnState] = useState(false);

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
      <Navbar
        todoCount={count}
        setPlaceholderText={setPlaceholderText}
        setBtnState={setBtnState}
        searchText={searchText}
      />
      <div className="container">
        <TodoInput
          onSubmit={onSubmit}
          placeholderText={placeholderText}
          setSearchText={setSearchText}
          btnState={btnState}
        />
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
