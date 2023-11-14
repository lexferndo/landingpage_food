import PropTypes from "prop-types";

function ButtonPrevious({ previous }) {
  return (
    <button
      className="flex items-center bg-primary rounded-full gap-x-2 uppercase text-base font-medium text-white px-6 py-3"
      onClick={previous}>
      <div className="bg-white p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="19"
          viewBox="0 0 21 19"
          fill="none"
          className=" fill-primary">
          <path d="M5.0257 8.82185L14.4693 0.280476C14.8837 -0.0934919 15.555 -0.0934919 15.9705 0.280476C16.3848 0.654443 16.3848 1.26186 15.9705 1.63583L7.27592 9.49949L15.9694 17.3631C16.3838 17.7371 16.3838 18.3445 15.9694 18.7194C15.555 19.0934 14.8826 19.0934 14.4683 18.7194L5.02465 10.1781C4.61655 9.80797 4.61655 9.191 5.0257 8.82185Z" />
        </svg>
      </div>
      Prev
    </button>
  );
}

ButtonPrevious.propTypes = {
  previous: PropTypes.func.isRequired,
};

export default ButtonPrevious;
