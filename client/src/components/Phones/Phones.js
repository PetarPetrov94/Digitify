import * as categoryService from "../../services/categoryService";
import "./Phones.css";

import { Helmet } from "react-helmet";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Phones = () => {
  const phones = categoryService.findPhoneOffers({});
  return (
    <div className="phone-container">
      <Helmet>
        <title>Digitify | Phones</title>
      </Helmet>
      <h1>Phones</h1>
      <div className="phones">
        {phones.map((phone, i) => {
          return (
            <Card className="phone-body" key={i}>
              <CardImg key={i} top width="10%" src={phone.productImage} />
              <CardBody>
                <CardTitle key={i} tag="h5">
                  {phone.productName}
                </CardTitle>
                <CardText key={i}>{phone.productDescription}</CardText>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Phones;
