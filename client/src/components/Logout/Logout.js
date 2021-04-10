import { useContext, useEffect } from "react";
import { Redirect } from "react-router";

import { UserContext } from "../../App";

const Logout = ({ history }) => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    localStorage.clear("token");
    setUser({});
  }, []);

  return <Redirect to="/" push={true} />;
};

export default Logout;
