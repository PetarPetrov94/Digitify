import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItems/CategoryItems";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories-container">
      <Helmet>
        <title>Digitify | Categories</title>
      </Helmet>
      <h1>Categories</h1>
      <div className="category-index">
        <Link to="/categories/computers">
          <CategoryItem>Computers</CategoryItem>
        </Link>
        <Link to="/categories/phones">
          <CategoryItem>Phones</CategoryItem>
        </Link>
        <Link to="/categories/phones">
          <CategoryItem>Phones</CategoryItem>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
