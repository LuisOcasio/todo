import styled from "styled-components";

//pass food details into item modal component

const Card = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 13rem;
  height: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export default Card;
