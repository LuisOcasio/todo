import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartModal, LocationModal, RegisterModal } from "./modals/index.js";

const Nav = () => {
  return (
    <NavBar>
      <UL>
        <LI>
          <Link to="/">MENU</Link>
          <LocationModal />
          <Link to="/">GIFT CARDS</Link>
          <Link to="/">ORDER ONLINE</Link>
          <Link to="/">SIGN IN</Link>
          <RegisterModal />
          <CartModal />
        </LI>
      </UL>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.nav`
  font-weight: 300;
  display: flex;
  height: 3rem;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #a0d8db;
  position: relative;
  z-index: 11;
  width: 100%;
  justify-content: flex-end;
`;

const UL = styled.ul`
  width: 80%;
`;

const LI = styled.li`
  width: 100%;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  color: #c82d35;
  align-items: center;
`;

const SignupWrapper = styled.div`
  display: flex;
  width: 7rem;
  justify-content: space-evenly;
  background-color: #c82d35;
  border: 3px solid #1e3453;
  border-radius: 2rem;
  font-family: "Ribeye", cursive;
  color: #fff;
  align-items: center;
`;
