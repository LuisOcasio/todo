import { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form } from "semantic-ui-react";

const UserRegister = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const { register, handleSubmit } = useForm();

  const signup = () => {
    axiosWithAuth()
      .post("/register", {
        ...input,
      })

      .catch((error) => {
        console.log(error, "something went wrong");
      });
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signup(input);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
      <Form.Field>
        <label>First Name</label>
        <input
          name="firstName"
          placeholder="First Name"
          value={input.first}
          onChange={handleChange}
          ref={register}
        />
      </Form.Field>

      <Form.Field>
        <label>Last Name</label>
        <input
          name="lastName"
          placeholder="Last Name"
          value={input.last}
          onChange={handleChange}
          ref={register}
        />
      </Form.Field>

      <Form.Field>
        <label>Email</label>
        <input
          name="email"
          placeholder="Email"
          value={input.email}
          onChange={handleChange}
          ref={register}
        />
      </Form.Field>

      <Form.Field>
        <label>Phone</label>
        <input
          name="phone"
          placeholder="Phone"
          value={input.phone}
          onChange={handleChange}
          ref={register}
        />
      </Form.Field>

      <Form.Field>
        <label>Address</label>
        <input
          name="address"
          placeholder="Address"
          value={input.address}
          onChange={handleChange}
          ref={register}
        />
      </Form.Field>

      <Form.Field>
        <label>Password</label>
        <input
          name="password"
          placeholder="Password"
          value={input.password}
          onChange={handleChange}
          ref={register}
        />
      </Form.Field>

      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default UserRegister;
