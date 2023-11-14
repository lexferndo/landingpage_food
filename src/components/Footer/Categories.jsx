import PropTypes from "prop-types";

function Categories({ categories }) {
  return (
    <div className="grid gap-y-8">
      <h1 className="font-medium text-lg">Categories</h1>
      <ul className="grid gap-y-5">
        {categories.map((category) => (
          <li key={category.id}>
            <a href="" className="font-normal text-sm text-light1">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Categories;
