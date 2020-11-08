import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const RegisterForm = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const { register, handleSubmit, errors } = useForm();

  const signup = () => {
    axiosWithAuth()
      .post("/register", {
        ...input,
      })
      .then((response) => {
        console.log(response, "succesful registration");
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
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Input
        text="text"
        name="firstName"
        placeholder="first name"
        value={input.first}
        onChange={handleChange}
        ref={register}
      />
      <Input
        text="text"
        name="lastName"
        placeholder="last name"
        value={input.last}
        onChange={handleChange}
        ref={register}
      />
      <Input
        text="text"
        name="email"
        placeholder="email"
        value={input.email}
        onChange={handleChange}
        ref={register}
      />
      <Input
        text="text"
        name="phone"
        placeholder="phone"
        value={input.phone}
        onChange={handleChange}
        ref={register}
      />
      <Input
        text="text"
        name="address"
        placeholder="address"
        value={input.address}
        onChange={handleChange}
        ref={register}
      />
      <Input
        text="text"
        name="password"
        placeholder="password"
        value={input.password}
        onChange={handleChange}
        ref={register({
          required: "please enter a password",
          minLength: { value: 8, message: "password must be 8 characters" },
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}

      <Button type="submit" onClick={onSubmit}>
        Sign Up
      </Button>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: flex-end;
  height: 15rem;
  justify-content: space-evenly;
`;

const Input = styled.input`
  width: 25%;
  height: 10%;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 10%;
  border-radius: 5px;
  text-align: center;
`;

export default RegisterForm;
