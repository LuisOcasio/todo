import styled from "styled-components";
import Card from "../components/Card";
import { Burger, HotDog, Fries, LoadedFries } from "../images/index.js";
import { ItemModal } from "./modals/index.js";

const foodImages = [Burger, HotDog, Fries, LoadedFries];

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
