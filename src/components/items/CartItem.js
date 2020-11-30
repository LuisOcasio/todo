import { useState } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { Coca } from "../../images/drinks/index.js";

const CartItem = () => {
  const [price] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const addItem = () => {
    return setQuantity(quantity + 1);
  };

  const removeItem = () => {
    return setQuantity(quantity - 1);
  };

  return (
    <Wrapper>
      <ItemTitle>Item Title</ItemTitle>
      <ItemPrice>{price}</ItemPrice>
      <SelectedItem>
        <img src={Coca} alt="menu item" style={{ width: "7rem" }} />
        <p>
          <Icon
            onClick={removeItem}
            name="triangle left"
            style={{ color: "red" }}
          />
          QTY: {quantity}
          <Icon
            onClick={addItem}
            name="triangle right"
            style={{ color: "red" }}
          />
        </p>
      </SelectedItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 15rem;
`;

const ItemTitle = styled.p`
  text-align: center;
`;

const ItemPrice = styled.p`
  text-align: right;
`;

const SelectedItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

export default CartItem;
