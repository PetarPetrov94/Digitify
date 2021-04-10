import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

import * as categoryService from "../../services/categoryService";
import "./TVs.css";

const TVs = () => {
  const [tvs, setTVs] = useState([]);
  const [fetchingState, setFetchingState] = useState(true);

  useEffect(() => {
    setFetchingState(true);

    categoryService.findTvOffers().then((data) => {
      setTVs(data);
      setFetchingState(false);
    });
  }, []);

  if (fetchingState) {
    return <p>Loading...</p>;
  }

  return (
    <div className="tv-container">
      <Helmet>
        <title>Digitify | Phones</title>
      </Helmet>
      <h1>Phones</h1>
      {tvs.map((tv, index) => {
        return (
          <Card key={index} className="tv-body">
            <CardImg key={index} className="tv-image" src={tv.productImage} />
            <CardBody>
              <CardTitle key={index} tag="h5">
                {tv.productName}
              </CardTitle>
              <CardText key={index}>{tv.productDescription}</CardText>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};

export default TVs;
