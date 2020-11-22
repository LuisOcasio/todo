import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <Wrapper>
      {props.children}
      <Button>ADD TO CART</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 17.5%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: #1e3453;
  color: #fff;
  width: 100%;
  height: 17.5%;
  border-radius: 5rem;
  font-family: "Ribeye", cursive;
`;

export default Card;
