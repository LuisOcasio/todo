import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const landing = () => {
  return (
    <Wrapper>
      <Nav />
      <Footer />
    </Wrapper>
  );
};

export default landing;

const Wrapper = styled.div`
  min-height: 100vh;
`;
