import styled from "styled-components";
import Card from "../../components/Card";
import {
  FantaOrange,
  Coca,
  CherryCola,
  Sprite,
} from "../../images/drinks/index.js";

const drinkImages = [Coca, FantaOrange, CherryCola, Sprite];

const Drinks = () => {
  return (
    <Wrapper>
      {drinkImages.map((item, index) => {
        return (
          <Card key={item}>
            <Img src={item} alt="drinks" />
            <Button menuDrinks={item} slot={index}>
              ADD TO CART
            </Button>
          </Card>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #eafff9;
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-items: center;
`;

const Img = styled.img`
  width: 10rem;
  height: 10rem;
`;

const Button = styled.button`
  background: #c82d35;
  color: #fff;
  width: 100%;
  height: 2.5rem;
  border-radius: 5rem;
  font-family: "Ribeye", cursive;
`;

export default Drinks;
