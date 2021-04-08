import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

import * as categoryService from "../../services/categoryService";
import "./Phones.css";

const Phones = () => {
  const phones = JSON.stringify(categoryService.findPhoneOffers({}));
  console.log(phones);

  // const [products, setProducts] = useState(null);

  // useEffect(() => {

  //   setProducts(phones);
  // }, []);
  // console.log(products);
  if (phones) {
    return (
      <div className="phone-container">
        <Helmet>
          <title>Digitify | Phones</title>
        </Helmet>
        <h1>Phones</h1>
        {Object.keys(phones).map((phone, key) => {
          return (
            <Card key={key} className="phone-body">
              <CardImg
                key={key}
                top
                width="10%"
                src={phones[key].productImage}
              />
              <CardBody>
                <CardTitle key={key} tag="h5">
                  {phones[key].productName}
                </CardTitle>
                <CardText key={key}>{phones[key].productDescription}</CardText>
              </CardBody>
            </Card>
          );
        })}
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default Phones;
