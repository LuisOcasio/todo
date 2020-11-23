import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LocationModel from "./LocationModel";

const Nav = () => {
  return (
    <NavBar>
      <UL>
        <LI>
          <Link to="/">MENU</Link>
          <Link component={LocationModel} />
          <Link to="/">GIFT CARDS</Link>
          <Link to="/">ORDER ONLINE</Link>
          <Link to="/">SIGN IN</Link>
          <SignupWrapper>
            <Link>
              <p>SIGN UP</p>
            </Link>
          </SignupWrapper>
        </LI>
      </UL>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.nav`
  
  font-weight: 300;
  display: flex;
  height: 50px;;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #a0d8db;
  position: relative;
  z-index: 11;
  width: 100%
`;

const UL = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const LI = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  color: #c82d35;
  width: 65%;
  align-items: center;
`;

const SignupWrapper = styled.button`
  display: flex;
  width: 96px;
  height: 25px;
  justify-content: space-evenly;
  background-color: #c82d35;
  border: 3px solid #1e3453;
  border-radius: 25.5px;
  font-family: "Ribeye", cursive;
  color: #fff;
  align-items: center;
`;
