import RegisterForm from "./RegisterForm";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Title>SIGN UP FOR OFFERS AND REWARDS!</Title>
      <RegisterForm />
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 21.5rem;
  background-color: #487698;
  position: static;
  bottom: 0;
  left: 0;
`;

const Title = styled.h1`
  color: #fff;
  margin-left: 1rem;
  font-family: "Ribeye", cursive;
`;
