import Rating from "../Rating";
import PropTypes from "prop-types";

function CardTrending({ name, category, rating, color, imageUrl }) {
  return (
    <div className="sm:h-80 shadow-lg rounded-2xl bg-contain hover:bg-[url('../assets/background-hero.png')]">
      <div className={`sm:h-80 rounded-2xl ${color}`}>
        <div className="py-5 gap-y-2 sm:py-10 px-6 w-72 grid sm:gap-y-5 justify-items-start">
          <div className="h-32">
            <img
              src={imageUrl}
              alt="image"
              className="rounded-md"
              width={120}
              height={128}
            />
          </div>
          <div className="grid gap-y-1">
            <h1 className="text-black text-2xl font-medium">{name}</h1>
            <p className="text-primary text-lg font-medium">{category}</p>
          </div>
          <Rating star={rating} />
        </div>
      </div>
    </div>
  );
}

CardTrending.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CardTrending;
