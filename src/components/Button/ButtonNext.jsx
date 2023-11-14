import PropTypes from "prop-types";

function ButtonNext({ next }) {
  return (
    <button
      className="flex items-center bg-primary rounded-full gap-x-2 uppercase text-base font-medium text-white px-6 py-3"
      onClick={next}>
      <div className="bg-white p-2 rounded-full ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          className="fill-primary">
          <g clipPath="url(#clip0_307_4303)">
            <path d="M14.2314 8.85223L6.06946 0.692977C5.71132 0.335739 5.13107 0.335739 4.77202 0.692977C4.41388 1.05021 4.41388 1.63046 4.77202 1.9877L12.2866 9.49956L4.77293 17.0114C4.41479 17.3687 4.41479 17.9489 4.77293 18.307C5.13107 18.6643 5.71222 18.6643 6.07036 18.307L14.2323 10.1478C14.585 9.79424 14.585 9.20487 14.2314 8.85223Z" />
          </g>
          <defs>
            <clipPath id="clip0_307_4303">
              <rect
                width="18.15"
                height="18.15"
                fill="white"
                transform="translate(0.425049 0.425049)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      Next
    </button>
  );
}

ButtonNext.propTypes = {
  next: PropTypes.func.isRequired,
};

export default ButtonNext;
