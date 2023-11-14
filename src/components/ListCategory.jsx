import CardCategory from "./Card/CardCategory";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

function ListCategory({ categories }) {
  const categoryColorMap = {
    Cupcake: "bg-green2/90",
    Pizza: "bg-blue2/90",
    Kebab: "bg-purple2/90",
    Salmon: "bg-red2/95",
    Doughnut: "bg-lime2/90",
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return categories.length === 0 ? (
    <p>Tidak Ada Category</p>
  ) : (
    <Carousel
      arrows={false}
      responsive={responsive}
      ssr={true}
      customButtonGroup={<ButtonGroup />}
      className="h-96 -mt-10">
      {categories.map((category) => (
        <CardCategory
          key={category.id}
          color={categoryColorMap[category.name]}
          {...category}
        />
      ))}
    </Carousel>
  );
}

ListCategory.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default ListCategory;
