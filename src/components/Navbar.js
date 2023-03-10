import React from "react";
import Search from "./Search";

const Navbar = ({ todoCount, setPlaceholderText, setBtnState, searchText }) => {
  const style = {
    backgroundColor: "#e3f2fd",
  };

  return (
    <nav className="navbar   mb-3 " style={style}>
      <div className="container-fluid">
        <h1 className="">Todo App</h1>
        <div>Total todo:{todoCount} </div>
        <Search
          setPlaceholderText={setPlaceholderText}
          setBtnState={setBtnState}
          searchText={searchText}
        />
      </div>
    </nav>
  );
};
export default Navbar;
