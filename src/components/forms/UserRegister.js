import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

const UserRegister = () => {
  return (
    <Form
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
      <Form.Field>
        <label>First Name</label>
        <input placeholder="First Name" />
      </Form.Field>

      <Form.Field>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </Form.Field>

      <Form.Field>
        <label>Email</label>
        <input placeholder="Email" />
      </Form.Field>

      <Form.Field>
        <label>Phone</label>
        <input placeholder="Phone" />
      </Form.Field>

      <Form.Field>
        <label>Address</label>
        <input placeholder="Address" />
      </Form.Field>

      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default UserRegister;
