import { useState } from "react";
import styled from "styled-components";
import { Header, Modal } from "semantic-ui-react";
import cart from "../../images/cart.png";

const CartModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      id="modal"
      style={{
        width: "23rem",
        height: "35rem",
        top: "0",
        right: "0",
        background: "#487698",
        overflowY: "auto",
        borderTopLeftRadius: "2.5rem",
        borderBottomLeftRadius: "2.5rem",
      }}
      open={open}
      trigger={
        <button
          style={{
            background: "none",
          }}
        >
          <img src={cart} alt="shopping cart" style={{ width: "2rem" }} />
        </button>
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header
        style={{
          fontFamily: "Ribeye, cursive",
          background: "#C82D35",
          color: "#fff",
        }}
      >
        <p>MY ORDER(ITEMS)</p>
      </Header>

      <Modal.Content
        style={{
          fontFamily: "Ribeye, cursive",
          background: "#487698",
          height: "100%",
          color: "#fff",
          fontSize: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <TotalWrapper>
          <CouponSection>
            <p>COUPON CODE</p>

            <InputWrapper>
              <Input type="text" placeholder="COUPON CODE" />
              <InputButton
                type="submit"
                value="APPLY"
                style={{ fontFamily: "Ribeye,cursive" }}
              />
            </InputWrapper>

            <FinePrint>Only one coupon allowed per order</FinePrint>
          </CouponSection>
          <TotalSection>
            <p>ESTIAMATED TOTAL: $0.00</p>
          </TotalSection>
        </TotalWrapper>
      </Modal.Content>

      <Modal.Actions
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#487698",
          borderTop: "none",
          padding: "0px 0px",
        }}
      >
        <button
          style={{
            borderRadius: "25.5px",
            color: "#fff",
            width: "10rem",
            height: "2.5rem",
            fontFamily: "Ribeye ,cursive",
            background: "#1E3453",
            border: "3px solid #C82D35",
          }}
          onClick={() => setOpen(false)}
        >
          BACK TO MENU
        </button>

        <button
          style={{
            borderRadius: "25.5px",
            background: "#C82D35",
            color: "#fff",
            width: "10rem",
            height: "2.5rem",
            fontFamily: "Ribeye ,cursive",
            border: "3px solid #1E3453",
          }}
        >
          CHECKOUT
        </button>
      </Modal.Actions>
    </Modal>
  );
};

const TotalWrapper = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CouponSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 7rem;
`;

const Input = styled.input`
  height: 2rem;
  width: 7rem;
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
  font-family: "Ribeye", cursive;
  font-size: 0.75rem;
  text-align: center;
  border: 1px solid #c82d35;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const InputButton = styled.input`
  height: 2rem;
  width: 5rem;
  border-top-right-radius: 1em;
  border-bottom-right-radius: 1em;
  background-color: #c82d35;
  color: #fff;
`;

const FinePrint = styled.p`
  font-size: 0.75em;
`;

const TotalSection = styled.div`
  width: 100%;
  text-align: left;
`;

export default CartModal;
