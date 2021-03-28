import { Helmet } from "react-helmet";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Digitify | Login</title>
      </Helmet>
      <h1>Login Page</h1>
    </div>
  );
};

export default Login;
