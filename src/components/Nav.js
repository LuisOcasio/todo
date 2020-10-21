import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <div>
      <ul>
        <NavBar>
          <Link to="/">Home</Link>
          <NavLinks>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <Link href="https://web20dayones-todo-development.herokuapp.com//auth/google">Sign In with Google</Link>
          </NavLinks>
        </NavBar>
      </ul>
    </div>
  );
};

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: 100%;
`;

const NavLinks = styled.li`
  width: 15%;
  display: flex;
  justify-content: space-between;
`;

export default Nav;
