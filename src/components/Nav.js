import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavBar>
      <UL>
        <LI>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://web20dayones-todo-development.herokuapp.com/auth/google"
          >
            Sign In with Google
          </a>
        </LI>
      </UL>
    </NavBar>
  );
};

const NavBar = styled.nav`
  border-bottom: 1px solid grey;
  font-weight: 300;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  height: 5rem;
  align-items: center;
`;

const UL = styled.ul`
  width: 50%;
`;

const LI = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
`;

export default Nav;
