import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavBar>
      <UL>
        <LI>
          <Link to="/">MENU</Link>
          <Link to="/">LOCATIONS</Link>
          <Link to="/">GIFT CARDS</Link>
          <Link to="/">ORDER ONLINE</Link>
          <Link to="/">SIGN IN</Link>
        </LI>
      </UL>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.nav`
  border-bottom: 1px solid grey;
  font-weight: 300;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  height: 2.75rem;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #a0d8db;
`;

const UL = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const LI = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  color: #c82d35;
  width: 75%;
`;
