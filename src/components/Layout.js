import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">TodoList</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
