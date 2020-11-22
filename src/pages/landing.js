import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import MenuNav from "../components/MenuNav";
import Items from "../components/Items";
import Footer from "../components/Footer";

const landing = () => {
  return (
    <Wrapper>
      <Nav />
      <MenuNav />
      <Items />
      <Footer />
    </Wrapper>
  );
};

export default landing;

const Wrapper = styled.div`
  min-height: 100vh;
`;
