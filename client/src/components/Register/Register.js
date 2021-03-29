import { Helmet } from "react-helmet";
import "./Register.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-container">
      <Helmet>
        <title>Digitify | Register</title>
      </Helmet>
      <Form className="register-form">
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
            type="repeatPassword"
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
