/* eslint-disable react/style-prop-object */

import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import * as authService from "../../services/authService";
import { UserContext } from "../../App";
import "./Login.css";

const Login = ({ history }) => {
  const { setUser } = useContext(UserContext);
  const onLoginSubmitHander = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    authService.loginUser(email.value, password.value).then((response) => {
      const { token } = response;
      localStorage.setItem("token", token);
      setUser({});
      history.push("/");
    });
  };

  return (
    <div className="login-container">
      <Helmet>
        <title>Digitify | Login</title>
      </Helmet>
      <Form className="login-form" onSubmit={onLoginSubmitHander}>
        <h1 className="text-center">
          Welcome to<span className="font-weight-bold"> Digitify</span>
        </h1>
        <h2 className="text-center">Login page</h2>
        <FormGroup>
          <Label for="email">
            <p style={{ color: "white" }}>Email</p>
          </Label>
          <Input id="email" type="email" placeholder="example@example.com" />
        </FormGroup>
        <FormGroup>
          <Label for="password">
            <p style={{ color: "white" }}>Password</p>
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </FormGroup>
        <Button className="btn-lg btn-light btn-block">Login</Button>
        <span className="form-input-register">
          Don't have an account? Register <Link to="/register">here</Link>
        </span>
      </Form>
    </div>
  );
};

export default Login;
