import ButtonNext from "./Button/ButtonNext";
import ButtonPrevious from "./Button/ButtonPrevious";
import PropTypes from "prop-types";

function ButtonGroup({ next, previous }) {
  return (
    <div className="sm:absolute flex gap-x-3 bottom-0 right-0">
      <ButtonPrevious previous={() => previous()} />
      <ButtonNext next={() => next()} />
    </div>
  );
}

ButtonGroup.propTypes = {
  next: PropTypes.func,
  previous: PropTypes.func,
};

export default ButtonGroup;
