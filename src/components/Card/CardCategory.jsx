import PropTypes from "prop-types";

function CardCategory({ name, items, iconUrl, color }) {
  return (
    <div className="mr-4 bg-contain rounded-md hover:bg-[url('../assets/background-hero.png')] hover:h-48">
      <div className={`py-10 rounded-md hover:h-48  ${color}`}>
        <div className="grid justify-items-center gap-y-4">
          <img src={iconUrl} alt="iconCard" width={45} height={50} />
          <div className="text-center">
            <p className="text-base font-medium ">{name}</p>
            <p className="text-sm font-normal">{items} Items</p>
          </div>
        </div>
      </div>
    </div>
  );
}

CardCategory.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.number.isRequired,
  iconUrl: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CardCategory;
