import "./CategoryItems.css";
const CategoryItem = (props) => {
  return <div className="category-item">{props.children}</div>;
};

export default CategoryItem;
