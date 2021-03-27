import { Helmet } from "react-helmet";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories-container">
      <Helmet>
        <title>Digitify | Categories</title>
      </Helmet>
      <h1>Categories</h1>
      <div className="category-index">
        <p>First Category</p>
        <p>Second Category</p>
        <p>Third Category</p>
        <p>Fourth Category</p>
        <p>Fifth Category</p>
      </div>
    </div>
  );
};

export default Categories;
