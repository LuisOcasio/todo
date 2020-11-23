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
  width: 13rem;
  height: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: #1e3453;
  color: #fff;
  width: 100%;
  height: 2.5rem;
  border-radius: 5rem;
  font-family: "Ribeye", cursive;
`;

export default Card;
