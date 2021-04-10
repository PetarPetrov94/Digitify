import { Helmet } from "react-helmet";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

import "./Register.css";
import * as authService from "../../services/authService";

const Register = ({ history }) => {
  if (localStorage.getItem("token")) {
    history.push("/");
  }
  const onRegisterSubmitHandler = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    authService
      .registerUser(email.value, password.value)
      .then(history.push("/login"));
  };
  return (
    <div className="register-container">
      <Helmet>
        <title>Digitify | Register</title>
      </Helmet>
      <Form className="register-form" onSubmit={onRegisterSubmitHandler}>
        <h1 className="text-center">
          Register to <span className="font-weight-bold">Digitify</span>
        </h1>
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
            placeholder="Enter your desired Password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="repeatPassword">
            <p style={{ color: "white" }}>Repeat Password</p>
          </Label>
          <Input
            id="repeatPassword"
            type="password"
            placeholder="Repeat your Password"
          />
        </FormGroup>
        <Button className="btn-lg btn-light btn-block" type="submit">
          Register
        </Button>
        <span className="form-input-login">
          Already have an account? Login <Link to="/login">here</Link>
        </span>
      </Form>
    </div>
  );
};

export default Register;
