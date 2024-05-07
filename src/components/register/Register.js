import React from "react";
import { useForm } from "../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../utils/validators";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../shared/UIElemets/Input";
import classes from "./Register.module.css";
import Button from "../shared/UIElemets/Button";

function Register() {
  const navigate = useNavigate();
  const [inputHandler, formState] = useForm({
    email: { value: "", isValid: false },
    password: { value: "", isValid: false },
    isValid: false,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        process.env.REACT_APP_URL + "/api/v1/user/register",
        {
          method: "POST",
          body: JSON.stringify({
            name: formState.name.value,
            email: formState.email.value,
            password: formState.password.value,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.register}>
      <form onSubmit={submitHandler} className={classes.registerForm}>
        <h2>REGISTER</h2>
        <p>
          Do you have already an account?
          <NavLink to={"/login"}>Login</NavLink>
        </p>
        <Input
          id="name"
          element="input"
          type="text"
          label="Name"
          placeholder="Name"
          errorMsg="Please enter a valid name!"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
        />

        <Input
          id="email"
          element="input"
          type="email"
          label="Email"
          placeholder="Email"
          errorMsg="Please enter a valid email!"
          onInput={inputHandler}
          validators={[VALIDATOR_EMAIL()]}
        />

        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          placeholder="Password"
          errorMsg="Please enter a valid password!"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(6)]}
        />

        <Button className={formState.isValid ? "" : classes.invalid}>
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;
