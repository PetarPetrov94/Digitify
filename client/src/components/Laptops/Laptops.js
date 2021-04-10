import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

import * as categoryService from "../../services/categoryService";
import "./Laptops.css";

const Laptops = () => {
  const [laptops, setLaptops] = useState([]);
  const [fetchingState, setFetchingState] = useState(true);

  useEffect(() => {
    setFetchingState(true);

    categoryService.findLaptopOffers().then((data) => {
      setLaptops(data);
      setFetchingState(false);
    });
  }, []);

  if (fetchingState) {
    return <p>Loading...</p>;
  }

  return (
    <div className="laptop-container">
      <Helmet>
        <title>Digitify | Laptops</title>
      </Helmet>
      <h1>Laptops</h1>
      {laptops.map((laptop, index) => {
        return (
          <Card key={index} className="laptop-body">
            <CardImg
              key={index}
              className="laptop-image"
              src={laptop.productImage}
            />
            <CardBody>
              <CardTitle key={index} tag="h5">
                {laptop.productName}
              </CardTitle>
              <CardText key={index}>{laptop.productDescription}</CardText>
              <CardText key={index}>Price: {laptop.productPrice} leva</CardText>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default Laptops;
