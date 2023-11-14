import favorite from "../assets/favorite.svg";
import unfavorite from "../assets/unfavorite.svg";
import PropTypes from "prop-types";

function Rating({ star }) {
  const ratingStar = Array.from({ length: 5 }, (value, index) => {
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <img src={favorite} alt="favorite" className="w-3 sm:w-4" />
        ) : (
          <img src={unfavorite} alt="unfavorite" className="w-3 sm:w-4" />
        )}
      </span>
    );
  });
  return <div className="flex sm:gap-x-1 ">{ratingStar}</div>;
}

Rating.propTypes = {
  star: PropTypes.number.isRequired,
};

export default Rating;
