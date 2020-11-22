import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuNav = () => {
  return (
    <NavBar>
      <Link to="/">BREAKFAST</Link>
      <Link to="/">ENTREES</Link>
      <Link to="/">SALADS</Link>
      <Link to="/">KIDS MEALS</Link>
      <Link to="/">DRINKS</Link>
      <Link to="/">DIPPING SAUCES AND DRESSINGS</Link>
    </NavBar>
  );
};

export default MenuNav;

const NavBar = styled.nav`
  font-weight: 300;
  padding: 0 1em;
  display: flex;
  height: 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #a0d8db;
  position: relative;
  z-index: 10;
  justify-content: space-around;
  color: #c82d35;
  text-align: center;
  width: 100%;
  align-items: center;
`;

////////////