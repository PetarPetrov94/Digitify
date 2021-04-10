import { Helmet } from "react-helmet";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import * as offerService from "../../services/offerService";
import "./CreateOffer.css";

const CreateOffer = ({ history }) => {
  if (!localStorage.getItem("token")) {
    history.push("/");
  }
  const onCreateSubmitHandler = (e) => {
    e.preventDefault();
    const {
      productName,
      productDescription,
      productImage,
      productType,
      productPrice,
    } = e.target;
    offerService
      .createOffer(
        productName.value,
        productDescription.value,
        productImage.value,
        productType.value,
        productPrice.value
      )
      .then(() => {
        history.push("/categories");
      });
  };
  return (
    <div className="create-product-container">
      <Helmet>
        <title>Digitify | Create offer</title>
      </Helmet>
      <Form className="create-product-form" onSubmit={onCreateSubmitHandler}>
        <h1 className="text-center">Create Offer</h1>
        <FormGroup>
          <Label for="productName">
            <p style={{ color: "white" }}>Product Name</p>
            <Input
              id="productName"
              type="text"
              placeholder="e.g. Samsung Note 20 Ultra"
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="productDescription">
            <p style={{ color: "white" }}>Product Description</p>
            <Input
              id="productDescription"
              type="textarea"
              placeholder="e.g. The latest flagship"
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="productImage">
            <p style={{ color: "white" }}>Image URL</p>
            <Input
              id="productImage"
              type="text"
              placeholder="Place your image URL here"
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="productType">
            <p style={{ color: "white" }}>Type of product</p>
            <Input type="select" name="productType" id="productType">
              <option value="computer">Computer</option>
              <option value="phone">Phone</option>
              <option value="laptop">Laptop</option>
            </Input>
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="productPrice">
            <p style={{ color: "white" }}>Price</p>
            <Input tpye="text" name="productPrice" id="productPrice" />
          </Label>
        </FormGroup>
        <Button className="btn-lg btn-light btn-block">Create Offer</Button>
      </Form>
    </div>
  );
};

export default CreateOffer;
