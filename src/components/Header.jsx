import React from "react";
import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const on = "bg-cyan-700 text-base text-white dark:text-white md:bg-transparent md:text-cyan-700";
const off = "border-b border-gray-100 text-base text-gray-700 hover:bg-gray-50  md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 ";

const Header = () => {
  return (
    <div className="container fixed z-10">
      <Navbar>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">MBOOKS</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="text-4xl">
          <NavLink to="/" className={({ isActive }) => (isActive ? on : off)}>
            Home
          </NavLink>
          <NavLink to="/add" className={({ isActive }) => (isActive ? on : off)}>
            <p>Add</p>
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
