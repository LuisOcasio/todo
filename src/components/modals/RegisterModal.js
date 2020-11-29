import { useState } from "react";
import { Link } from "react-router-dom";
import UserRegister from "../forms/UserRegister";
import { Header, Modal } from "semantic-ui-react";
import google_button from "../../images/google-button.png";

const RegisterModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Modal
        style={{ width: "30rem", height: "25rem" }}
        closeIcon
        open={open}
        trigger={
          <button
            style={{
              background: "none",
              color: "#c82d35",
              fontFamily: "Ribeye,cursive",
              cursor: "pointer",
            }}
          >
            SIGN UP
          </button>
        }
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Header
          style={{
            fontFamily: "Ribeye, cursive",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          content={
            <>
              <Link to="/">
                <img src={google_button} alt="google sign in butotn" />
              </Link>
              <br />
              <p>- or -</p>
            </>
          }
        />

        <Modal.Content
          style={{
            fontFamily: "Ribeye, cursive",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <UserRegister />
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default RegisterModal;
