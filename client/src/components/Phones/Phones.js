import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

import * as categoryService from "../../services/categoryService";
import "./Phones.css";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [fetchingState, setFetchingState] = useState(true);

  useEffect(() => {
    setFetchingState(true);

    categoryService.findPhoneOffers().then((data) => {
      setPhones(data);
      setFetchingState(false);
    });
  }, []);

  if (fetchingState) {
    return <p>Loading...</p>;
  }

  console.log(phones);

  return (
    <div className="phone-container">
      <Helmet>
        <title>Digitify | Phones</title>
      </Helmet>
      <h1>Phones</h1>
      {phones.map((phone, index) => {
        return (
          <Card key={index} className="phone-body">
            <CardImg
              key={index}
              className="phone-image"
              src={phone.productImage}
            />
            <CardBody>
              <CardTitle key={index} tag="h5">
                {phone.productName}
              </CardTitle>
              <CardText key={index}>{phone.productDescription}</CardText>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default Phones;
