import React from "react";

const Navbar = ({ todoCount }) => {
  const style = {
    backgroundColor: "#e3f2fd",
  };

  return (
    <nav className="navbar   mb-3 " style={style}>
      <div className="container-fluid">
        <h1 className="">Todo App</h1>
        <div>Total todo:{todoCount} </div>
        <buton className="btn btn-outline-primary">search</buton>
      </div>
    </nav>
  );
};
export default Navbar;
