import styled from "styled-components";
import ItemModal from "../modals/ItemModal.js";
import Card from "../components/Card";
import burger from "../images/burger.png";
import hotdog from "../images/hot-dog.png";
import fries from "../images/fries.png";
import cheeseFries from "../images/cheese-fries.png";

const foodImages = [burger, hotdog, fries, cheeseFries];

const Items = () => {
  return (
    <Wrapper>
      {foodImages.map((item) => {
        return (
          <Card key={item}>
            <Img src={item} alt="food items" />
            <ItemModal menuItems={item} />
          </Card>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #a0d8db;
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-items: center;
`;

const Img = styled.img`
  width: 10rem;
  height: 10rem;
`;

export default Items;
