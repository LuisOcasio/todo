import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import cart from "../images/cart.png";

const CartModal = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      style={{ width: "30rem", height: "40rem" }}
      closeIcon
      open={open}
      trigger={
        <Button
          style={{
            background: "none",
          }}
        >
          <img src={cart} alt="shopping cart" style={{ width: "2rem" }} />
        </Button>
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header
        icon="shopping cart"
        style={{ fontFamily: "Ribeye, cursive" }}
        content="CONFIRM PICK UP DETAILS"
      />
      <Modal.Content style={{ fontFamily: "Ribeye, cursive" }}>
        <p>RESTAURANT ADDRESS</p>
      </Modal.Content>
      <Modal.Actions style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{
            backgroundColor: "#c82d35",
            color: "#fff",
            fontFamily: "Ribeye, cursive",
          }}
          onClick={() => setOpen(false)}
        >
          <Icon name="checkmark" /> CONFIRM
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default CartModal;
