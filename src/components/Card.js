import { Link } from "react-router-dom";
import styled from "styled-components";
import ItemModal from "../modals/ItemModal";

const Card = (props) => {
  return (
    <Wrapper>
      {props.children}
      <Link to="/" component={ItemModal} />
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

export default Card;
