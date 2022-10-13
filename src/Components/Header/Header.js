
import { Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="font-bold">
      <Navbar className='bg-transparent'>
        <Navbar.Brand>
          <span className="my-4 self-center whitespace-nowrap text-3xl font-bold">
            Quiz Box
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/topics">Topics</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
