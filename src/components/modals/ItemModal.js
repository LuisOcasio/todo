import { useState } from "react";
import { Modal } from "semantic-ui-react";
import styled from "styled-components";
import Extras from "../dropdowns/Extras.js";
import Remove from "../dropdowns/Remove.js";
import { options } from "../../data/index.js";

const title = Object.keys(options);

const ItemModal = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      style={{
        width: "22.5rem",
        height: "40rem",
        background: "#A0D8DB",
        borderRadius: "2rem",
      }}
      closeIcon
      open={open}
      /* customize button needs value of item*/
      trigger={<ButtonWrapper>CUSTOMIZE</ButtonWrapper>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Modal.Content
        style={{
          background: "#A0D8DB",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          borderRadius: "2rem",
          textAlign: "center",
        }}
      >
        <img
          src={props.menuItems}
          alt="fast food items"
          style={{ width: "10rem", height: "10rem" }}
        />

        <p>THE ULTIMATE {title[props.slot]}</p>

        <Extras slot={props.slot} />
        <br />
        <Remove slot={props.slot} />

        <Modal.Actions>
          <button
            onClick={() => setOpen(false)}
            style={{
              borderRadius: "25.5px",
              background: "#C82D35",
              color: "#fff",
              width: "10rem",
              height: "2.5rem",
              fontFamily: "Ribeye ,cursive",
            }}
          >
            ADD TO CART
          </button>
        </Modal.Actions>
      </Modal.Content>
    </Modal>
  );
};

const ButtonWrapper = styled.button`
  background-color: #1e3453;
  color: #fff;
  width: 100%;
  height: 2.5rem;
  border-radius: 5rem;
  font-family: "Ribeye", cursive;
`;

export default ItemModal;
