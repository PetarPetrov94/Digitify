import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItems/CategoryItems";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories-container">
      <Helmet>
        <title>Digitify | Categories</title>
      </Helmet>
      <h1>Categories</h1>
      <Card className="card-body">
        <CardImg
          top
          width="10%"
          src="https://assets.t3n.sc/news/wp-content/uploads/2020/10/iphone-12-pro-01.jpg?auto=format%2Ccompress&fit=crop&h=348&ixlib=php-2.3.0&q=75&w=620"
          alt="card-phone"
        />
        <CardBody>
          <CardTitle tag="h5">Phones</CardTitle>
          <CardText>Here is our collection of phones</CardText>
          <Button style={{ backgroundColor: "cornflowerblue" }}>
            <Link to="/categories/phones" style={{ color: "white" }}>
              Have a look
            </Link>
          </Button>
        </CardBody>
      </Card>
      <Card className="card-body">
        <CardImg
          top
          width="10%"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkh3ROXGQ9gywrL1qHARYh1SLYSm8RZaLTTg&usqp=CAU"
          alt="card-laptop"
        />
        <CardBody>
          <CardTitle tag="h5">Laptops</CardTitle>
          <CardText>Here is our collection of Laptops</CardText>
          <Button style={{ backgroundColor: "cornflowerblue" }}>
            <Link to="/categories/laptops" style={{ color: "white" }}>
              Have a look
            </Link>
          </Button>
        </CardBody>
      </Card>
      <Card className="card-body">
        <CardImg
          top
          width="10%"
          src="https://media.istockphoto.com/photos/view-of-modern-lcd-tv-on-black-background-picture-id149456950?k=6&m=149456950&s=170667a&w=0&h=JnlNznik1KB9AlKtbS-T0_PHfd7QTOWCkoQTzL6HT3A="
          alt="card-laptop"
        />
        <CardBody>
          <CardTitle tag="h5">TVs</CardTitle>
          <CardText>Here is our collection of TVs</CardText>
          <Button style={{ backgroundColor: "cornflowerblue" }}>
            <Link to="/categories/tvs" style={{ color: "white" }}>
              Have a look
            </Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Categories;
