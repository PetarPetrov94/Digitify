import { Helmet } from "react-helmet";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Digitify | Contacts</title>
      </Helmet>
      <h1>Contacts Page</h1>
      <p>
        If you have a question, contact us at:{" "}
        <strong>pp.petrov94@gmail.com</strong>
      </p>
    </div>
  );
};

export default Contacts;
