import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { UserContext } from "../../App";
import "./CreateOffer.css";

const CreateOffer = ({ history }) => {
  const { setUser } = useContext(UserContext);
  const onCreateSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="create-product-container">
      <Helmet>
        <title>Digitify | Create offer</title>
      </Helmet>
      <Form className="create-product-form" onSubmit={onCreateSubmitHandler}>
        <h1 className="text-center">Create Offer</h1>
        <FormGroup>
          <Label for="product-name">
            <p style={{ color: "white" }}>Product Name</p>
            <Input
              id="product-name"
              type="text"
              placeholder="e.g. Samsung Note 20 Ultra"
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="product-description">
            <p style={{ color: "white" }}>Product Description</p>
            <Input
              id="product-description"
              type="textarea"
              placeholder="e.g. The latest flagship"
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="product-image">
            <p style={{ color: "white" }}>Image URL</p>
            <Input
              id="product-image"
              type="text"
              placeholder="Place your image URL here"
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="product-type">
            <p style={{ color: "white" }}>Type of product</p>
            <Input type="select" name="product-type" id="product-type">
              <option>Computer</option>
              <option>Phone</option>
              <option>Laptop</option>
            </Input>
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="product-price">
            <p style={{ color: "white" }}>Price</p>
            <Input tpye="text" name="product-price" id="product-price" />
          </Label>
        </FormGroup>
      </Form>
    </div>
  );
};

export default CreateOffer;
