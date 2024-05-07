import React, { useContext, useState } from "react";
import classes from "./Login.module.css";
import Input from "../shared/UIElemets/Input";
import { useForm } from "../shared/hooks/form-hook";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../utils/validators";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../shared/UIElemets/Button";
import { AuthContext } from "../shared/context/authContext";

function Login() {
  const [errorMsg, setErrorMsg] = useState("");
  const { onLogin } = useContext(AuthContext);
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
        process.env.REACT_APP_URL + "/api/v1/user/login",
        {
          method: "POST",
          body: JSON.stringify({
            email: formState.email.value,
            password: formState.password.value,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();

      if (data.user?.token) {
        onLogin(data.user?.token, data.user?.name);
        navigate("/games");
      } else {
        setErrorMsg(data.msg);
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.login}>
      <form onSubmit={submitHandler} className={classes.loginForm}>
        <h2>LOGIN</h2>
        <p>
          Doesn't have an account yet?{" "}
          <NavLink to={"/register"}>Register</NavLink>
        </p>
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
          Login
        </Button>
        {errorMsg && <p className={classes.errorMsg}>{errorMsg}</p>}
      </form>
    </div>
  );
}

export default Login;
