import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import MenuNav from "../components/MenuNav"
import Footer from "../components/Footer";

const landing = () => {
  return (
    <Wrapper>
      <Nav />
      <MenuNav />
      <Footer />
    </Wrapper>
  );
};

export default landing;

const Wrapper = styled.div`
  min-height: 100vh;
`;
