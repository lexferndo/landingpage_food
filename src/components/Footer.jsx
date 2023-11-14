import AboutUs from "./Footer/AboutUs";
import Categories from "./Footer/Categories";
import Elemes from "./Footer/Elemes";
import Newsletter from "./Footer/Newsletter";
import PropTypes from "prop-types";

function Footer({ categories }) {
  return (
    <div className="hidden sm:flex px-14 py-20 gap-x-20 bg-green/70">
      <div>
        <Elemes />
      </div>
      <div className="grid grid-cols-4 gap-x-28">
        <div>
          <Categories categories={categories} />
        </div>
        <div>
          <AboutUs />
        </div>
        <div>
          <Newsletter />
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Footer;
