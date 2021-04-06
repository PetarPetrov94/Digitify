import { useContext } from "react";
import { Redirect } from "react-router";

import { UserContext } from "../../App";

export const Logout = ({ history }) => {
  const { setUser } = useContext(UserContext);
  localStorage.clear("token");
  setUser({});
  history.push("/");
  return <Redirect to="/" push={true} />;
};

export default Logout;
