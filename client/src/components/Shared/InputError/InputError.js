import { Alert } from "reactstrap";

const InputError = ({ children }) => {
  if (!children) {
    return null;
  }
  return <Alert color="danger">{children}</Alert>;
};

export default InputError;
