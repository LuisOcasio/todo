import styled from "styled-components";
import Card from "../components/Card";
import burger from "../images/burger.png";
import hotdog from "../images/hot-dog.png";
import fries from "../images/fries.png";
import cheeseFries from "../images/cheese-fries.png";
import ItemModal from "./modals/ItemModal.js";

const foodImages = [burger, hotdog, fries, cheeseFries];

const Items = () => {
  return (
    <Wrapper>
      {foodImages.map((item, index) => {
        return (
          <Card key={item}>
            <Img src={item} alt="food items" />
            <ItemModal menuItems={item} slot={index} />
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
