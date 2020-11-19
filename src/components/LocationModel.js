import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styled from "styled-components";

const LocationModel = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        <p>LOCATION</p>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fade in={open} style={{ background: "#fff" }}>
          <Wrapper>
            Model Content
            <Input type="search" placeholder="search" />
          </Wrapper>
        </Fade>
      </Modal>
    </div>
  );
};

export default LocationModel;

const Button = styled.button`
  color: #c82d35;
  background: none;
  font-family: "Ribeye", cursive;
`;

const Wrapper = styled.div`
  width: 35%;
  height: 67%;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  border: none;
`;

const Input = styled.input`
  border: 1px solid #000;
  text-align: center;
`;
