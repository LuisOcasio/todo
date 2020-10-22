import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const RegisterForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (e) => {
    console.log("on submit", e);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Input
        text="text"
        Form
        name="first-name"
        placeholder="name"
        ref={register}
      />
      <Input
        text="text"
        name="last-name"
        placeholder="last name"
        ref={register}
      />
      <Input text="text" name="email" placeholder="email" ref={register} />
      <Input
        text="text"
        name="password"
        placeholder="password"
        ref={register({
          required: "please enter a password",
          minLength: { value: 8, message: "password must be 8 characters" },
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}

      <Button type="submit">Sign Up</Button>
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
