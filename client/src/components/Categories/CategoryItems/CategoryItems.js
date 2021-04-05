import "./CategoryItems.css";
const CategoryItem = (props) => {
  return <li className="category-item">{props.children}</li>;
};

export default CategoryItem;
